const router = require('express').Router();
const UserService = require('../services/UserService');

router.get('/', (req, res) => {
  UserService.getUsers()
  .then((message) => {
    res.json(message);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.post('/', (req, res) => {
  UserService.newUser(req.body)
  .then((message) => {
    res.json(message);
  })
  .catch((err) => {
    res.json(err);
  });
});

module.exports = router;
