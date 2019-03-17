const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const url = require('url');

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`1 - ${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

function read_file(path)
{
  return new Promise
  (
    (resolve) =>
    {
        fs.readFile('.' + path,
        (err, data) =>
        {
          if (err) throw err;
          console.log(`3 - ${typeof data}`);
          resolve(data);
        });
    });
}

function type_of_file(path)
{
  var type;
  switch(path.substring(path.lastIndexOf(".")+1))
  { // рас­шир.
    case "html":
    case "htm": type = "text/html; charset=UTF-8"; break;
    case "js": type = "application/Ja­va­Script;charset=UTF-8"; break;
    case "css": type = "text/css; charset=UTF-8"; break;
    case "txt" : type = "text/plain; charset=UTF-8"; break;
    case "jpg" : type = "image/jpeg"; break;
    case "manifest": type = "text/cache-manifest; charset=UTF-8"; break;
    default: type = "application/octet-stream"; break;
  }
  return type;
}

// response

app.use(
  async ctx =>
{
  var path = ctx.request.path;

  if(path === '/')
  {
    ctx.body = fs.readFileSync('stol2.html', 'utf8');
  }
  else
  {
    console.log(`2 - .${path}`);
    var data_b = await read_file(path);
    console.log(`4 - ${typeof data_b}`);

    ctx.type = type_of_file(path);
    ctx.body = data_b;
    console.log(`5 - ${ctx.type}`);
  }
});

app.listen(3000);
