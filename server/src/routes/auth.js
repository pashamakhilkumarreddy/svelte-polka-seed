const Router = require('koa-router');

const router = new Router();

const {
  login,
  register,
} = require('../controllers');

router.post('/login', login);
router.post('/register', register);

module.exports = router;
