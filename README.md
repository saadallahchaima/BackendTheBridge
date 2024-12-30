#Démo : Gestion de Cours
Une application démonstrative pour la gestion de cours, développée avec Spring Boot, Flutter, et H2. Ce projet met en avant des fonctionnalités essentielles telles que l'affichage, la consultation, la mise à jour et la suppression de cours, ainsi qu'une interface admin simple et une landing page.
Fonctionnalités
Backend (Spring Boot) :
API REST :
Liste tous les cours.
Consulte les détails d’un cours.
Met à jour les informations d’un cours.
Supprime un cours.
Frontend (Flutter) :
Landing Page : Présente les fonctionnalités principales.
Interface Admin :
Affiche la liste des cours.
Permet de consulter, mettre à jour ou supprimer un cours.
Formulaire pour ajouter ou modifier un cours.
Base de données (H2) :
Base de données embarquée utilisée pour stocker les données des cours.
Console H2 disponible pour la gestion manuelle et l’inspection des données.
Prérequis
Backend :
Java 17+
Maven
Frontend :
Flutter (Dart SDK 3.0 ou supérieur)
Base de données :
H2 (intégré dans Spring Boot)
Installation
Étape 1 : Backend (Spring Boot)
Clonez le projet :

bash
Copier le code
git clone https://github.com/ton-utilisateur/demo-gestion-cours.git
Accédez au répertoire du backend :

bash
Copier le code
cd demo-gestion-cours/backend
Installez les dépendances et démarrez le serveur Spring Boot :

bash
Copier le code
./mvnw spring-boot:run
Accédez à la console H2 via :

URL : http://localhost:8080/h2-console
JDBC URL : jdbc:h2:mem:testdb
User : sa
Password : (laissez vide)
Étape 2 : Frontend (Flutter)
Accédez au répertoire du frontend :

bash
Copier le code
cd demo-gestion-cours/frontend
Installez les dépendances Flutter :

bash
Copier le code
flutter pub get
Lancez l'application :

bash
Copier le code
flutter run
Utilisation
Landing Page : Accédez à la page d'accueil pour découvrir les fonctionnalités de l'application.
Interface Admin :
Consultez la liste des cours.
Ajoutez, mettez à jour ou supprimez des cours via l’interface dédiée.
Structure du Projet
graphql
Copier le code
demo-gestion-cours/
├── backend/        # API Spring Boot et base de données H2
├── frontend/       # Application Flutter pour le frontend
└── README.md       # Documentation du projet
Auteur
Chaima Saadallah
Étudiante en ingénierie informatique, spécialisée en développement mobile et web.
#Démo
https://github.com/user-attachments/assets/9a923e9d-5aaf-48e7-aadd-cd948f1619b3

