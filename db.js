const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/courseDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MongoDB', err));

module.exports = mongoose;
