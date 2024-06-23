const express = require('express');
const router = express.Router();

// Example user data
let users = [];

// Create a new user
router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
});

// Get all users
router.get('/', (req, res) => {
  res.send(users);
});

// Get a specific user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

// Update a user by ID
router.put('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index !== -1) {
    users[index] = req.body;
    res.send(users[index]);
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.send(deletedUser);
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

module.exports = router;
