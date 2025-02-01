# Quiz Application

This is a simple quiz application built using **React.js**. Users can answer multiple-choice questions, and upon selecting an answer, the application will highlight the selected option in **green** if it's correct and in **red** if it's wrong. The correct answer will always be highlighted in green, regardless of the user's choice. After the quiz is completed, users can view their score on a result page.

## Features

- **Multiple Choice Quiz**: Users answer one question at a time, and only one option can be selected.
- **Answer Feedback**: If the user chooses the correct option, it will be highlighted in **green**. If the user chooses an incorrect option, their option will be highlighted in **red**, and the correct answer will be shown in **green**.
- **Results Page**: After completing the quiz, users can view their score (total number of correct answers).
- **Routing**: The app uses **React Router** for navigation between the quiz and results page.
- **Styling**: The application is styled with **Tailwind CSS** for a modern, responsive interface.

## Technologies Used

- **React.js**: For building the user interface and handling state.
- **React Router DOM**: For navigating between the quiz and result pages.
- **Tailwind CSS**: For designing a clean and responsive layout.
- **JavaScript**: For handling logic, state management, and event handling.

## Installation

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/SatynarayanMaurya/Quiz-Application.git
```
```
cd quiz-app
npm install
npm run dev
```
```
quiz-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Quiz.js       # Main quiz component for handling questions and options
│   │   └── Result.js     # Result component to display score
│   ├── questions.js      # Array of questions with options and correct answers
│   ├── App.js            # Main entry point of the application
│   ├── index.js          # Entry point for rendering the app
│
├── package.json
└── README.md
```

