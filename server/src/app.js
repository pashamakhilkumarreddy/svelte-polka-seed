const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const compression = require('koa-compress');

const {
  server,
} = require('./config');

const app = new Koa();

const router = new Router();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(koaBody());

const { PORT } = server;

require('./routes')({
  app,
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.info(`The application is up and running on ${PORT}`);
});
