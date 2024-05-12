# Dan's Car Rental - Group 3 Project (CS3450)

## Project Overview
Dan's Car Rental is a web application developed as part of the CS3450 course by Group 3. This project was a collaborative effort that taught us valuable skills in agile methodologies and teamwork. Our main objective was to create a seamless car rental service that allows users to rent cars through a user-friendly web interface while managing data through a robust backend system.

### Technical Stack
- **Frontend:** Vue.js - A progressive JavaScript framework used for building user interfaces.
- **Backend:** Node.js with Express - A JavaScript runtime built on Chrome's V8 JavaScript engine, used for the server-side logic.
- **Database:** SQLite - A C-language library that implements a small, fast, self-contained, high-reliability, full-featured SQL database engine.
- **Version Control:** Git - Used for tracking changes in the source code during development.
- **Project Management:** Jira - Agile project management tool that supports any agile methodology.
- **Testing:** Cypress and Mocha - Used for writing browser-based and unit tests to ensure quality and functionality.

## Key Learnings
- **Agile Development:** Implemented Scrum, enhancing our ability to respond to unpredictability through iterative work cadences.
- **Team Collaboration:** Gained experience in collaborative problem-solving and feature integration through pull requests and code reviews.
- **Full-Stack Development:** Developed skills in both frontend and backend development, understanding how to create dynamic, database-driven web applications.

## Project Organization
This project is divided into two main parts:
- **Frontend Application:** The interface for user interaction.
- **Backend Application:** Manages business logic and database interactions, and provides an API for data access and manipulation.

### Branching Strategy
- `main` branch: Stable and deployable state of the application.
- `develop` branch: Integration branch for features and fixes.
- Feature branches: Based on `develop`, prefixed with `DCR-{ticket #}_Ticket_Description`.

## Setup and Running Instructions

### Initial Setup
1. Ensure Node.js and npm are installed.
2. Clone the repository and navigate into the project directory.
3. Install dependencies:
   ```sh
   cd "App Frontend"
   npm install
   cd ../App Backend
   npm install
   npm run db:migrate
   npm run db:seed
   ```

### Running the Applications
1. Open two command shells in the project root.
2. In the first shell, start the frontend:
   ```sh
   cd "App Frontend"
   npm run dev
   ```
3. In the second shell, start the backend:
   ```sh
   cd "App Backend"
   npm run dev
   ```

### Accessing the Applications
- Frontend: <http://localhost:5713>
- Backend: <http://localhost:3000>

## Testing
Refer to the `package.json` files in each project directory for available testing scripts. Integration tests are done using Cypress.

## Documentation
- **Scrum Documents:** Located in `docs/scrumMilestone3/`.
- **Project Presentation:** Available in `docs/presentation` or [Google Slides](https://docs.google.com/presentation/d/1BtV3ePxTkxE1OrxPIj8Qrl9AGrBDBaMe4zalUUzhhPM/edit#slide=id.g2189308b72f_0_123).

## User Credentials
- **Customer:** `WatsonMan`, `12345678SUM`
- **Employee:** `1WatsonMan`, `112345678SUM`
- **Manager:** `2WatsonMan`, `212345678SUM`
