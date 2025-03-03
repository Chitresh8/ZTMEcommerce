# ZTMEcommerce & Practice (Tasks, Logics etc)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Installed npm install browser-image-compression (image compression package)
npm create vite@latest - Installed
npm install redux react-redux redux-thunk - Installed 
To create a login API for a React.js application, you'll typically set up a backend server with an endpoint to handle login requests. Here’s a step-by-step guide:

1. Backend API Setup (Node.js + Express)
First, set up an API endpoint on a server. Here's an example with Node.js and Express:

Install dependencies: Make sure to install express and bcrypt for password hashing (if storing passwords).

bash
Copy code
npm install express bcrypt jsonwebtoken
Create the server:

javascript
Copy code
// server.js
<!-- const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express(); -->

// Middleware to parse JSON bodies
<!-- app.use(express.json()); -->

// Sample user data (In real projects, use a database)
<!-- const users = [{ username: 'testUser', password: await bcrypt.hash('password123', 10) }]; -->

// Login route
<!-- app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username); -->

  // Check if user exists and password is correct
  <!-- if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Create JWT token
  const token = jwt.sign({ username: user.username }, 'your-secret-key', { expiresIn: '1h' });
  res.json({ token });
}); -->

<!-- app.listen(3000, () => {
  console.log('Server running on port 3000');
}); -->
Configure CORS (optional) if your React app is on a different domain.

2. React Login Form and API Integration
Set up the login form:

javascript
Copy code
// Login.js
<!-- import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid login');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // Store the token
      alert('Login successful!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login; -->
Authenticate Requests Using the Token: For authenticated routes, add the token to the Authorization header:

javascript
Copy code
<!-- const token = localStorage.getItem('token');

const response = await fetch('http://localhost:3000/protected-route', {
  headers: { Authorization: `Bearer ${token}` },
}); -->
3. Handling Protected Routes in React
Check Authentication Status: Use the presence of the token in localStorage to determine if a user is logged in.
Redirect Unauthorized Users: In your protected pages, check for the token and redirect if it's missing.
This basic setup should get you started with a login API for a React.js app, complete with token-based authentication and login handling.


<!--Getting error like this

when i login with the api, showing error like this

ajaxRequestInterceptor.ps.js:1 
 POST http://localhost:5173/login net::ERR_ABORTED 404 (Not Found)
n	@	ajaxRequestInterceptor.ps.js:1
fetch	@	ajaxRequestInterceptor.ps.js:1
await in fetch		
loginClickHandler	@	TodoList.jsx:84
Show 15 more frames -->


ChatGPT said:
ChatGPT
The error net::ERR_ABORTED 404 (Not Found) means that your React application is trying to access http://localhost:5173/login, but it’s not finding that route on your backend server. This typically happens if:

The backend server is not running on the correct port or has not started.
The frontend is trying to reach the backend at the wrong URL (wrong port or incorrect path).
There’s a CORS (Cross-Origin Resource Sharing) issue.
Steps to Resolve the Issue
1. Verify Your Backend Server is Running on the Correct Port
Make sure your backend server is running and listening on http://localhost:3000, as that’s where the login endpoint is defined in your backend code.

2. Update the API URL in Your React Application
It looks like your React app is trying to send requests to its own port (http://localhost:5173/login), which is incorrect if the backend is on a different port (e.g., 3000). To fix this:

Replace the fetch URL in your login request in Login.js with the correct backend address:

javascript
Copy code
const response = await fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password }),
});
This directs the request to http://localhost:3000/login, where your backend should be listening.

3. Check CORS Configuration (Optional)
If the backend server is on a different origin (e.g., localhost:3000 while React runs on localhost:5173), you’ll need to ensure your backend allows cross-origin requests. To enable CORS in an Express backend:

Install the cors package:

bash
Copy code
npm install cors
Then, update your backend code to use cors:

javascript
Copy code
const cors = require('cors');
app.use(cors());
This will allow requests from other origins, like your React development server.



Redux thunk step by step installation
1.In Terminal ==> npm install redux react-redux redux-thunk


Installed react-router-dom => npm install react-router-dom and implemented code splitting

Here's a list of 100 React JS coding problems that you can practice, divided into different levels:

Beginner Level
Create a simple React component that displays "Hello World".
Create a button that increments a counter on click.
Create a form that takes user input and displays it below the form.
Change the background color of a page using a button click.
Render an array of items using .map() inside a JSX element.
Create a toggle button that switches between "ON" and "OFF".
Make a counter component that supports both increment and decrement.
Create a component that accepts props and displays them.
Create a list of user names and display each name in a separate <li> element.
Create a stateful form with an input field that updates the state.
Create a color picker using React and update the background color based on selected color.
Create a component that returns a different message based on a user’s age.
Render a list of items with checkboxes, and display a count of checked items.
Create a basic React app with navigation links.
Create a dynamic greeting message based on the time of day.
Display a dynamic title in the header of a page.
Create a class-based component and convert it to a functional component.
Display a greeting message based on the user’s name passed as props.
Handle user input with controlled components.
Change a button text on click.
Intermediate Level
Create a to-do list where users can add, remove, and mark tasks as complete.
Build a timer app that starts, stops, and resets a timer.
Create a React component with lifecycle methods to log messages at different stages.
Build a simple calculator with React to perform basic arithmetic operations.
Create a dropdown menu that dynamically lists items based on state.
Build a dynamic form that displays different input types based on the state.
Implement conditional rendering for different UI components based on user input.
Create a simple modal that opens and closes when a button is clicked.
Build a React search bar that filters a list of items as you type.
Create a component that accepts children props and renders them.
Use React Context to manage global state (e.g., theme switching).
Build a pagination component that allows navigating between pages of data.
Implement error boundaries in React to catch errors in child components.
Use useEffect hook to fetch data from an API on component mount.
Build a simple image carousel that switches images automatically.
Create a simple quiz app with multiple questions and answers.
Implement a theme switcher (light/dark mode) using React Context API.
Create a form validation system with React.
Use controlled components for managing form input and validation.
Use useState and useEffect hooks together in a functional component.
Advanced Level
Create a drag-and-drop interface for a list of items.
Build a chat app that updates in real time with new messages.
Implement lazy loading for images or components in React.
Create a reusable modal component that can be used throughout the app.
Implement infinite scrolling for loading large lists of data.
Build a React app with a custom hook for fetching data from an API.
Build a dynamic table with sorting, filtering, and pagination.
Implement a login form with validation and JWT token-based authentication.
Create a responsive layout using React and CSS Flexbox/Grid.
Build a dynamic chart (e.g., bar chart or line chart) using a React charting library.
Create a countdown timer that tracks time to a specific date.
Implement React Router for navigation between different pages in the app.
Build a weather app that fetches data from a weather API.
Create a multi-step form with state management in React.
Build a to-do list with data persistence (localStorage).
Implement form submission with validation and error handling.
Build a multi-language app with language switching.
Create a custom hook to manage form states.
Implement JWT-based authentication with a backend in React.
Build a real-time news feed with WebSockets or long polling.
Create a dashboard with dynamic cards that display various data.
Implement client-side routing using React Router.
Build a complex calculator app with advanced mathematical operations.
Create a social media feed that supports likes, comments, and shares.
Create a React app with server-side rendering (SSR) using Next.js.
Build a file upload system with drag-and-drop support.
Create a form with dynamic field types (text, select, radio buttons).
Create a file explorer UI that loads folders and files dynamically.
Build a movie database app that fetches data from a movie API.
Create a modal that supports both confirmation and cancellation actions.
Implement a real-time chat application with React and Firebase.
Create an admin dashboard with user management, charts, and data visualizations.
Build a music player app with play/pause and volume controls.
Implement a drag-and-drop file upload system with preview.
Create a React form wizard with multiple steps.
Implement a rating system where users can rate items on a scale of 1 to 5 stars.
Create a responsive layout using CSS Grid and Flexbox.
Implement a notification system with toast messages or pop-ups.
Create a user authentication system with React, Node.js, and MongoDB.
Implement a search filter for a large dataset with React hooks.
Build a portfolio website using React that includes dynamic project cards.
Create a dynamic form where the fields can be added/removed dynamically.
Implement drag-and-drop functionality for sorting items in a list.
Create a custom input component for handling text inputs and validation.
Build a state management system using Redux or Zustand.
Create a React app that integrates with Google Maps API to display locations.
Build a movie rating app where users can rate movies and view their ratings.
Create a weather app that displays current and forecasted weather.
Implement offline functionality for a React app using service workers.
Build a calendar component that displays events and allows adding/removing events.
Create a drag-and-drop image editor using React.
Build a Markdown editor where users can write and preview markdown.
Implement infinite scroll for a list of items.
Build a contact form that sends data to an API when submitted.
Create an e-commerce app with product listings, filters, and a shopping cart.
Build a social media profile page with editable user details.
Create a blog platform with posts and comments, where users can add, edit, and delete posts.
Implement a custom dropdown with search functionality.
Create a file upload UI that shows progress using a React component.
Build a React app with multiple themes that can be switched at runtime.
These problems range from basic tasks like creating components to advanced challenges like building complete applications with state management, routing, and data fetching. Each task helps reinforce key concepts and build proficiency with React!

Ways to create react app - https://www.sitepoint.com/best-create-react-app-alternatives-for-different-use-cases/
