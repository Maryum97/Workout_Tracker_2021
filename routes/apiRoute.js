const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Workout = require("../models/workout.js");

// Find all exercises
router.get('/api/workout', (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Find a range/limit of exercises
router.get('/api/workout/range', (req, res) => {
    Workout.find({})
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Add a new exercise
router.post('/api/workout', ({ body }, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Update an existing exercise
router.put('/api/workout/:id', ({ params, body }, res) => {
    Workout.findByIdAndUpdate(
        {
            _id: params.id
        },
        {
            $push: { exercises: body }
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;