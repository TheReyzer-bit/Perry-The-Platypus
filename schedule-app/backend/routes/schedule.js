const express = require('express');
const router = express.Router();

// Example schedule data
let schedules = [];

// Create a new schedule
router.post('/', (req, res) => {
  const schedule = req.body;
  schedules.push(schedule);
  res.status(201).send(schedule);
});

// Get all schedules
router.get('/', (req, res) => {
  res.send(schedules);
});

// Get a specific schedule by ID
router.get('/:id', (req, res) => {
  const schedule = schedules.find(s => s.id === req.params.id);
  if (schedule) {
    res.send(schedule);
  } else {
    res.status(404).send({ message: 'Schedule not found' });
  }
});

// Update a schedule by ID
router.put('/:id', (req, res) => {
  const index = schedules.findIndex(s => s.id === req.params.id);
  if (index !== -1) {
    schedules[index] = req.body;
    res.send(schedules[index]);
  } else {
    res.status(404).send({ message: 'Schedule not found' });
  }
});

// Delete a schedule by ID
router.delete('/:id', (req, res) => {
  const index = schedules.findIndex(s => s.id === req.params.id);
  if (index !== -1) {
    const deletedSchedule = schedules.splice(index, 1);
    res.send(deletedSchedule);
  } else {
    res.status(404).send({ message: 'Schedule not found' });
  }
});

module.exports = router;
