const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Define a Workout Schema
const workoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  exercises: [{
    name: {
      type: String,
      required: true
    },
    sets: {
      type: Number,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    weight: {
      type: Number
    },
    duration: {
      type: Number
    }
  }],
  notes: {
    type: String
  }
});

// Create a Workout Model
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;



// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const workoutSchema = new Schema({
//   workoutText: {
//     type: String,
//     required: 'You need to leave a workout!',
//     minlength: 1,
//     maxlength: 280,
//     trim: true,
//   },
//   workoutAuthor: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },
//   comments: [
//     {
//       commentText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280,
//       },
//       commentAuthor: {
//         type: String,
//         required: true,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => dateFormat(timestamp),
//       },
//     },
//   ],
// });

// const workout = model('workout', workoutSchema);

// module.exports = workout;
