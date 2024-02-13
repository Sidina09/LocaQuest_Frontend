## LocaQuest Frontend
LocaQuest Frontend is an Angular application designed to interact with the LocaQuest Rails backend to manage users, questions, and answers.

## Getting Started
To set up and run the project locally, follow these steps:

Clone the Repository:

bash
Copy code
git clone <repository-url>
Install Dependencies:

bash
Copy code
npm install
Configure Environment:
Update the environment.ts file in the src/environments directory with the appropriate API URL:

typescript
Copy code
export const environment = {
  production: false,
  apiUrl : 'http://127.0.0.1:3000/'
};
Run the Development Server:

bash
Copy code
npm start
Now you can access the Angular application locally at http://localhost:4200/.

## Components and Services
UserService
Description: Handles HTTP requests related to user management.
Methods:
getUsers(): Retrieves all users from the backend.
postUsers(data): Posts a new user to the backend.
QuestionService
Description: Handles HTTP requests related to questions and answers.
## Methods:
getQuestions(): Retrieves all questions from the backend.
postQuestions(data): Posts a new question to the backend.
postAnswers(data): Posts a new answer to the backend.
SigninComponent
Description: Component for user sign-in functionality.
## Features:
Validates user credentials.
Redirects to the list of questions upon successful sign-in.
SignupComponent
Description: Component for user sign-up functionality.
Features:
Allows users to create a new account.
Redirects to the sign-in page upon successful sign-up.
ListQuestionsComponent
Description: Component to display a list of questions and post new questions and answers.
Features:
Retrieves and displays existing questions.
Allows users to post new questions and answers.
## Dependencies
Angular: ^14.3.0
Bootstrap: ^5.3.2
ng-bootstrap: ^13.0.0
PrimeNG: ^14.0.0
Development Server Commands
npm start: Starts the development server.
npm run build: Builds the project for production.
npm run watch: Builds the project and watches for changes in development mode.
npm test: Runs unit tests.

## License
This project is licensed under the MIT License.
