const router = require('express').Router();

router.use('/user', require('./UserController'));

module.exports = router;
