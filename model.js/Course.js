const mongoose = require('mongoose');

// Définition du schéma Course
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// Création du modèle Course
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
