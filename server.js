const express = require('express');
const mongoose = require('./db'); // Connexion MongoDB
const courseRoutes = require('./routes/courseRoutes');

const app = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Routes pour les cours
app.use('/api', courseRoutes);

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));
