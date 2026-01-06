# AGM - Administration Générale Municipale

AGM est une plateforme web moderne et complète conçue pour rationaliser les processus administratifs des municipalités au Sénégal. Elle fournit une interface centralisée et conviviale permettant aux agents de tout gérer, des actes d'état civil à l'urbanisme et aux finances municipales.

L'application est construite en se concentrant sur des cas d'utilisation réels, garantissant que les outils fournis sont pertinents, efficaces et adaptés aux besoins de la gouvernance locale.

## ✨ Fonctionnalités

La plateforme est organisée en modules distincts, chacun gérant un aspect essentiel de l'administration municipale :

- **🏛️ Tableau de bord :** Un aperçu centralisé des indicateurs clés et des activités récentes de tous les modules.
- **👤 État Civil :** Gestion des actes de naissance, de mariage et de décès.
- **📍 Foncier :** Gestion cadastrale, incluant une carte interactive des parcelles.
- **🏗️ Urbanisme :** Suivi des permis de construire, des autorisations d'aménagement et autres dossiers d'urbanisme.
- **📜 Délibérations :** Gestion des réunions du conseil municipal, des décisions et des procès-verbaux officiels.
- **💰 Finances :** Suivi des budgets, des recettes et des dépenses avec des rapports visuels.
- **👥 Ressources Humaines :** Gestion des agents municipaux, de leurs rôles et de leurs affectations.
- **🏢 Prestataires :** Annuaire et gestion des contrats pour les fournisseurs et prestataires de services externes.
- **🛠️ Projets :** Système de suivi et de conseil de projets assisté par IA pour superviser et orienter les projets municipaux.
- **🗄️ Archives :** Une archive numérique pour le stockage, la recherche et la consultation faciles des documents officiels.
- **📊 Rapports :** Génération de rapports statistiques pour un usage interne et externe.
- **📢 Doléances :** Un système permettant aux citoyens de soumettre et de suivre leurs réclamations et suggestions.
- **🔔 Notifications :** Un système d'alerte interne pour les échéances importantes et les mises à jour.
- **⚙️ Paramètres :** Gestion du profil utilisateur et des paramètres de l'application.

## 🚀 Stack Technique

- **Framework :** [Next.js](https://nextjs.org/) (avec App Router)
- **Langage :** [TypeScript](https://www.typescriptlang.org/)
- **UI :** [React](https://react.dev/)
- **Style :** [Tailwind CSS](https://tailwindcss.com/)
- **Composants :** [ShadCN UI](https://ui.shadcn.com/)
- **Graphiques :** [Recharts](https://recharts.org/)
- **Cartographie :** [Leaflet.js](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
- **Intégration IA :** [Genkit](https://firebase.google.com/docs/genkit)

## 🏁 Démarrage

Pour obtenir une copie locale et la faire fonctionner, suivez ces étapes simples.

### Prérequis

- Node.js (v18 ou ultérieure recommandée)
- npm ou yarn

### Installation

1. Clonez le dépôt :
   ```sh
   git clone <URL_DE_VOTRE_DEPOT>
   ```
2. Accédez au répertoire du projet :
   ```sh
   cd <REPERTOIRE_DU_PROJET>
   ```
3. Installez les paquets NPM :
   ```sh
   npm install
   ```

### Lancer le serveur de développement

Une fois les dépendances installées, vous pouvez démarrer le serveur de développement :

```sh
npm run dev
```

Ouvrez [http://localhost:9002](http://localhost:9002) dans votre navigateur pour voir le résultat.

## 🛠️ Scripts Disponibles

- `npm run dev` : Démarre le serveur de développement Next.js.
- `npm run build` : Crée une version de production de l'application.
- `npm run start` : Démarre le serveur de production.
- `npm run lint` : Analyse le code avec la configuration ESLint intégrée de Next.js.
