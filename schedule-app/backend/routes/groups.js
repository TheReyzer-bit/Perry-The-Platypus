const express = require('express');
const router = express.Router();

// Пример маршрута
router.get('/', (req, res) => {
  res.send('GET request to /api/groups');
});

module.exports = router;
