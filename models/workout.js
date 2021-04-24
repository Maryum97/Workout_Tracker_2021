const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                required: "Type of exercise is required"
            },
            name: {
                type: String,
                required: "Name of exercise is required"
            },
            duration: {
                type: Number,
                required: "Duration of exercise is required"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
    {
        toJSON: {
            // include any virtual properties when data is requested
            virtuals: true
        }
    });

workoutSchema.virtual('totalDuration').get(() => {
    // reduce array of exercises down to just the sum of their durations
    return this.exercises.reduce((ttl, exc) => {
        return ttl + exc.duration
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;