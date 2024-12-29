const Course = require('../models/Course');

// Ajouter un cours
const createCourse = async (req, res) => {
  const { title, price, imageUrl } = req.body;
  try {
    const course = new Course({ title, price, imageUrl });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du cours', error });
  }
};
// Récupérer tous les cours
const getCourses = async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des cours', error });
    }
  };
// Mettre à jour un cours
const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, price, imageUrl } = req.body;
    try {
      const course = await Course.findByIdAndUpdate(
        id,
        { title, price, imageUrl },
        { new: true } // Retourner le document mis à jour
      );
      if (!course) {
        return res.status(404).json({ message: 'Cours non trouvé' });
      }
      res.status(200).json(course);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour du cours', error });
    }
  };
// Supprimer un cours
const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
      const course = await Course.findByIdAndDelete(id);
      if (!course) {
        return res.status(404).json({ message: 'Cours non trouvé' });
      }
      res.status(200).json({ message: 'Cours supprimé avec succès' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression du cours', error });
    }
  };
      