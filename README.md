# AGM - Administration Générale Municipale

AGM is a modern, comprehensive web platform designed to streamline the administrative processes of municipalities in Senegal. It provides a centralized, user-friendly interface for agents to manage everything from civil status records to urban planning and municipal finances.

The application is built with a focus on real-world use cases, ensuring that the tools provided are relevant, efficient, and tailored to the needs of local governance.

## ✨ Features

The platform is organized into distinct modules, each handling a core aspect of municipal administration:

- **🏛️ Tableau de bord (Dashboard):** A centralized overview of key metrics and recent activities across all modules.
- **👤 État Civil (Civil Status):** Management of birth, marriage, and death certificates.
- **📍 Foncier (Land Management):** Cadastral management, including an interactive map of land parcels.
- **🏗️ Urbanisme (Urbanism):** Tracking of building permits, development authorizations, and other urban planning files.
- **📜 Délibérations (Deliberations):** Management of municipal council meetings, decisions, and official records.
- **💰 Finances (Finance):** Monitoring of budgets, revenues, and expenditures with visual reports.
- **👥 Ressources Humaines (Human Resources):** Management of municipal agents, roles, and assignments.
- **🏢 Prestataires (Providers):** Directory and contract management for external suppliers and service providers.
- **🛠 Projets (Projects):** AI-powered project tracking and guidance system to monitor and advise on municipal projects.
- **🗄️ Archives (Archives):** A digital archive for easy storage, search, and retrieval of official documents.
- **📊 Rapports (Reports):** Generation of statistical reports for internal and external use.
- **📢 Doléances (Complaints):** A system for citizens to submit and track complaints and suggestions.
- **🔔 Notifications:** An internal alert system for important deadlines and updates.
- **⚙️ Paramètres (Settings):** User profile and application settings management.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Charting:** [Recharts](https://recharts.org/)
- **Mapping:** [Leaflet.js](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
- **AI Integration:** [Genkit](https://firebase.google.com/docs/genkit)

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <YOUR_REPOSITORY_URL>
   ```
2. Navigate to the project directory:
   ```sh
   cd <PROJECT_DIRECTORY>
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```

### Running the Development Server

Once the dependencies are installed, you can start the development server:

```sh
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## 🛠 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Creates a production-ready build of the application.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.
