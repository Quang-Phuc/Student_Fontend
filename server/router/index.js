const express = require('express');

const router = express.Router();

router.post('/api/login', (req, res) => {
  const payload = req.body;
  const user = {
    username: payload.username,
    permissions: payload.role,
    account: payload
  };
  req.session.user = user;
  res.send(user);
});

router.get('/api/logout', (req, res) => {
  req.session = null;
  res.send({});
});

router.get('/api/whoami', (req, res) => {
  res.send(req.session.user);
});

module.exports = router;
