const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const compression = require('koa-compress');

const {
  server
} = require('./config');

const app = new Koa();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(koaBody());

const PORT = server.PORT || 3000;

// require('./routes')(app);

app.listen(PORT, () => {
  console.info(`The application is up and running on ${PORT}`);
});