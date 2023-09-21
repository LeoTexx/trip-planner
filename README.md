# Trip Planner Application

## Introduction

This application provides users with a handy interface to plan trips by specifying their city of origin, various destinations, date of travel, and the number of passengers. After submitting these details, the app will display the distance of the journey.

## Techs:

- NextJS
- ReactJS
- Typescript
- Formik

## Features

- **Dynamic Destinations:** Users can add or remove destinations as per their travel plans.
- **Passenger Count:** Users can specify the number of passengers for the trip.
- **Date Picker:** Users can pick a travel date with validations ensuring the selected date is after the current day.
- **Responsive Design:** Uses the `react-grid-system` to provide a mobile-friendly and responsive design.
- **Results Page:** Displays the best path results or errors, if any.

## Prerequisites

- Node.js and npm (or Yarn) installed on your machine.
- Basic knowledge of React and Next.js.

## Setup Instructions

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/LeoTexx/trip-planner
   ```

2. Navigate to the project directory:

   ```sh
   cd trip-planner
   ```

3. Install the required dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Visit `http://localhost:3000` in your browser to view the application.

## Usage

1. **HomePage (`pages/index.tsx`)**:

   - Users can specify the city of origin and dynamically add or remove destination cities.
   - Specify the number of passengers and the date of travel.
   - After inputting all details, users can submit the form.

2. **ResultPage (`pages/result.tsx`)**:
   - Displays the best path results based on the user's input.
   - In case of errors, users are informed with an appropriate error message and an option to return to the main page.
   - When the system is processing the results, a spinner is displayed indicating loading.
