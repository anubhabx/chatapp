
  <div align="center">
  <h1 align="center">ConvoConnect</h1>
  <h3>Codebase for the ConvoConnect platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-Node.js-004E89?logo=Node.js&style=for-the-badge" alt='Node.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express.js-004E89?logo=Express.js&style=for-the-badge" alt='Express.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-MongoDB-004E89?logo=MongoDB&style=for-the-badge" alt='MongoDB\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Socket.io-004E89?logo=Socket.io&style=for-the-badge" alt='Socket.io\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=for-the-badge" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Tailwind%20CSS-004E89?logo=Tailwind%20CSS&style=for-the-badge" alt='Tailwind CSS"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Overview

 This is a full-stack MERN (MongoDB, Express, React, Node.js) project with a socket.io real-time communication feature. The backend is built using Node.js and Express, while the frontend is built using React and Tailwind CSS. The project includes a MongoDB database for storing user data and chat messages, as well as a socket.io server for real-time communication between clients. The frontend includes a login/signup system, a chat interface, and a sidebar for selecting conversations. The project also includes a number of custom hooks for fetching and sending chat messages, as well as a background image component.

---

## 🌟 Features

 Here is a list of features for the project:<br>
* Full-stack MERN (MongoDB, Express, React, Node.js) project
* Socket.io real-time communication feature
* MongoDB database for storing user data and chat messages
* Node.js backend with Express
* React frontend with Tailwind CSS
* Login/signup system
* Chat interface
* Sidebar for selecting conversations
* Custom hooks for fetching and sending chat messages
* Background image component

---

## 📁 Repository Structure

```sh
├── .env
├── .gitignore
├── backend
│   ├── controllers
│   │   ├── auth.controllers.js
│   │   ├── message.controllers.js
│   │   └── users.controllers.js
│   ├── database
│   │   └── connectToDB.js
│   ├── middleware
│   │   └── protectRoute.js
│   ├── models
│   │   ├── conversation.model.js
│   │   ├── message.model.js
│   │   └── user.model.js
│   ├── routes
│   │   ├── auth.routes.js
│   │   ├── message.routes.js
│   │   └── users.routes.js
│   ├── server.js
│   ├── socket
│   │   └── socket.js
│   └── utils
│       └── generateToken.js
├── frontend
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── src
│   │   ├── App.jsx
│   │   ├── components
│   │   │   ├── background
│   │   │   │   └── Background.jsx
│   │   │   ├── messages
│   │   │   │   ├── Message.jsx
│   │   │   │   ├── MessageContainer.jsx
│   │   │   │   ├── MessageInput.jsx
│   │   │   │   ├── Messages.jsx
│   │   │   │   └── NoChatSelected.jsx
│   │   │   └── sidebar
│   │   │       ├── Conversation.jsx
│   │   │       ├── Conversations.jsx
│   │   │       ├── LogoutButton.jsx
│   │   │       ├── SearchInput.jsx
│   │   │       └── Sidebar.jsx
│   │   ├── context
│   │   │   ├── authContext.jsx
│   │   │   └── SocketContext.jsx
│   │   ├── hooks
│   │   │   ├── useGetConversations.js
│   │   │   ├── useGetMessages.js
│   │   │   ├── useListenMessages.js
│   │   │   ├── useLogin.js
│   │   │   ├── useLogout.js
│   │   │   ├── useSendMessage.js
│   │   │   └── useSignUp.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── home
│   │   │   │   └── Home.jsx
│   │   │   ├── login
│   │   │   │   └── Login.jsx
│   │   │   └── signup
│   │   │       ├── GenderSelector.jsx
│   │   │       └── SignUp.jsx
│   │   ├── utils
│   │   │   ├── emoji.js
│   │   │   └── extractTime.jsx
│   │   └── zustand
│   │       └── useConversation.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── package-lock.json
├── package.json
└── readme.md

```

---

## 💻 Code Summary

<details><summary>\backend\controllers</summary>

| File | Summary |
| ---- | ------- |
| auth.controllers.js |  The code defines three functions for creating a new user, logging in an existing user, and logging out the current user. |
| message.controllers.js |  The code defines four functions for handling messages in a messaging system: `getMessages`, `sendMessage`, `editMessage`, and `deleteMessage`. The `getMessages` function retrieves all messages for a given conversation, while the `sendMessage` function sends a new message to a recipient. The `editMessage` function edits an existing message, and the `deleteMessage` function deletes a message. |
| users.controllers.js |  The code defines an asynchronous function `getUsersForSidebar` that retrieves all users from the database except the currently logged-in user, and returns them in a JSON response. |

</details>

---

<details><summary>\backend\database</summary>

| File | Summary |
| ---- | ------- |
| connectToDB.js |  The code imports the Mongoose and Dotenv libraries, configures Dotenv, and exports a function that connects to MongoDB using the configured URI. |

</details>

---

<details><summary>\backend\middleware</summary>

| File | Summary |
| ---- | ------- |
| protectRoute.js |  The code defines a middleware function protectRoute that verifies the authenticity of a JSON Web Token (JWT) sent in a request's cookies, and if valid, retrieves the user associated with the token from the database and attaches it to the request object. |

</details>

---

<details><summary>\backend\models</summary>

| File | Summary |
| ---- | ------- |
| conversation.model.js |  The code defines a conversation schema for a MongoDB database, with fields for participants and messages, and creates a model for the conversations. |
| message.model.js |  The code defines a message schema for a MongoDB database, with fields for sender and receiver IDs, a message body, and timestamps. It exports a model for the message schema using Mongoose. |
| user.model.js |  The code defines a user schema for a MongoDB database using Mongoose, with fields for name, username, password, gender, and profile picture. It also includes timestamps and exports the user model. |

</details>

---

<details><summary>\backend\routes</summary>

| File | Summary |
| ---- | ------- |
| auth.routes.js |  The code defines an Express.js router that handles user authentication requests by routing them to the appropriate controller functions in the auth.controllers.js file. |
| message.routes.js |  The code defines an Express.js router that handles requests to the message controller, which includes methods for sending, editing, and deleting messages, as well as retrieving a list of messages. |
| users.routes.js |  The code defines an Express.js router that handles GET requests to the root URL (/ and calls the protectRoute middleware function before calling the getUsersForSidebar controller function. |

</details>

---

<details><summary>\backend</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code sets up an Express.js server and connects it to a MongoDB database, with routes for authentication, messages, and users, as well as serving the frontend React app. |

</details>

---

<details><summary>\backend\socket</summary>

| File | Summary |
| ---- | ------- |
| socket.js |  The code creates a websocket server using the socket.io library and an HTTP server using the http module, and exports the app, io, and server objects for use in other parts of the application. |

</details>

---

<details><summary>\backend\utils</summary>

| File | Summary |
| ---- | ------- |
| generateToken.js |  The code defines a function called `generateToken` that generates a JSON Web Token (JWT) for a user with the given ID and sets it as a cookie in the response. |

</details>

---

<details><summary>\frontend</summary>

| File | Summary |
| ---- | ------- |
| postcss.config.js |  The code defines a configuration object for a build process, including plugins for Tailwind CSS and Autoprefixer. |
| tailwind.config.js |  The code defines a Tailwind CSS configuration file that specifies the content, theme, and plugins to be used for the project. |
| vite.config.js |  The code defines a Vite configuration file that sets up a development server with a React plugin and configures proxying for API requests to a remote endpoint. |

</details>

---

<details><summary>\frontend\src</summary>

| File | Summary |
| ---- | ------- |
| App.jsx |  The code defines a React component called App that renders a layout with a background image, a navigation bar, and a toast notification system. The component uses the `useAuthContext` hook to access the authentication state of the user and conditionally renders different routes based on whether the user is authenticated or not. |
| main.jsx |  The code sets up a React application with a strict mode, browser router, authentication context provider, and socket context provider, and renders the App component in the root element with ID root |

</details>

---

<details><summary>\frontend\src\components\background</summary>

| File | Summary |
| ---- | ------- |
| Background.jsx |  The code defines a React component called Background that renders a full-screen background image with a gradient overlay. |

</details>

---

<details><summary>\frontend\src\components\messages</summary>

| File | Summary |
| ---- | ------- |
| Message.jsx |  The code defines a React component called `Message` that renders a chat message with the sender's profile picture, message content, and timestamp. It uses the `useAuthContext` hook to access the current user's information and the `useConversation` hook to access the selected conversation's information. |
| MessageContainer.jsx |  The code defines a React component that renders a container for a messaging interface, with a header, messages, and an input field. It uses the `useConversation` hook to manage the selected conversation and the `useEffect` hook to clean up the selected conversation when the component is unmounted. |
| MessageInput.jsx |  The code defines a React component called MessageInput that renders a form with an input field for typing messages and a button to send them. The component uses the useSendMessage hook to send messages and displays a loading indicator while the message is being sent. |
| Messages.jsx |  The code defines a React component called Messages that retrieves and displays messages from a server using the useGetMessages hook, and listens for new messages using the useListenMessages hook. It also scrolls to the bottom of the message list when new messages are received. |
| NoChatSelected.jsx |  The code defines a React component called NoChatSelected that displays a message and an icon when no chat is selected, using the react-icons/bi library and the useAuthContext hook from the authContext context. |

</details>

---

<details><summary>\frontend\src\components\sidebar</summary>

| File | Summary |
| ---- | ------- |
| Conversation.jsx |  The code defines a React component called Conversation that renders a conversation item in a list of conversations. It uses the `useConversation` hook to get the selected conversation and the `useSocketContext` hook to get the list of online users. The component checks if the current conversation is selected, and if it is, it applies a background color to it. |
| Conversations.jsx |  The code defines a React component called Conversations that retrieves conversations from an API using the useGetConversations hook and displays them in a list with a loading indicator. |
| LogoutButton.jsx |  The code defines a React component called LogoutButton that renders a button with an icon and text, which triggers the logout functionality when clicked. |
| SearchInput.jsx |  The code defines a React component that renders a search input form with a text field and a submit button. When the form is submitted, it checks if the search term is valid (not empty and at least 3 characters long), then searches for a conversation with the specified name in the conversations array and sets the selected conversation to the found one. |
| Sidebar.jsx |  The code defines a Sidebar component that renders a search input, conversations list, and logout button. |

</details>

---

<details><summary>\frontend\src\context</summary>

| File | Summary |
| ---- | ------- |
| authContext.jsx |  The code defines a React context for authentication, with a provider component that manages the authUser state and provides it to child components via the useAuthContext hook. |
| SocketContext.jsx |  The code defines a SocketContextProvider component that provides a socket connection and online users list to its children components, using the React Context API. |

</details>

---

<details><summary>\frontend\src\hooks</summary>

| File | Summary |
| ---- | ------- |
| useGetConversations.js |  The code defines a custom React hook called `useGetConversations` that fetches conversations from an API endpoint and returns an object containing the loading state and the fetched conversations. |
| useGetMessages.js |  The code defines a custom React hook called `useGetMessages` that fetches messages from an API endpoint based on the selected conversation ID, and returns an object containing the loading state and the fetched messages. |
| useListenMessages.js |  The code defines a custom React hook called `useListenMessages` that listens for new messages on a socket connection and updates the state of the component with the new message. |
| useLogin.js |  The code defines a custom hook called `useLogin` that handles login functionality for a React application, including validating user input and making an API request to authenticate the user. |
| useLogout.js |  The code defines a custom hook called `useLogout` that handles logging out the user by sending a POST request to the server and removing the user's authentication data from local storage. |
| useSendMessage.js |  The code defines a custom React hook called `useSendMessage` that allows the user to send a message to a selected conversation, using the `fetch` API to send the message to the server and updating the state of the component with the new message. |
| useSignUp.js |  The code defines a custom hook called `useSignUp` that handles the sign-up process for a user, including validating input and making an API request to create a new account. |

</details>

---

<details><summary>\frontend\src\pages\home</summary>

| File | Summary |
| ---- | ------- |
| Home.jsx |  The code defines a React component called Home that renders a container with a sidebar and a message container, using the flex layout to create a responsive design. |

</details>

---

<details><summary>\frontend\src\pages\login</summary>

| File | Summary |
| ---- | ------- |
| Login.jsx |  The code defines a React component for a login form, which allows users to enter their username and password and submit the form to log in. |

</details>

---

<details><summary>\frontend\src\pages\signup</summary>

| File | Summary |
| ---- | ------- |
| GenderSelector.jsx |  The code defines a React component called GenderSelector, which renders a checkbox group with two options for selecting the user's gender. The component takes in a handleGenderChange function and a selectedGender prop, and uses these to update the checked state of the checkboxes and trigger the handleGenderChange function when the user selects a new gender. |
| SignUp.jsx |  The code is a React component that renders a form for signing up to a web application, with input fields for name, username, password, and gender. It also includes a GenderSelector component for selecting the user's gender. When the form is submitted, it calls the `signUp` function from the `useSignUp` hook to handle the sign-up process. |

</details>

---

<details><summary>\frontend\src\utils</summary>

| File | Summary |
| ---- | ------- |
| emoji.js |  The code defines a function called `getRandomEmoji` that returns a random emoji from a list of 48 emojis. |
| extractTime.jsx |  The provided code defines a function called `extractTime` that takes a date string as input and returns the time portion of the date in the format HH:mm |

</details>

---

<details><summary>\frontend\src\zustand</summary>

| File | Summary |
| ---- | ------- |
| useConversation.js |  The code defines a custom hook called useConversation using the Zustand library, which creates a state container with properties for selected conversation, messages, and methods to update them. |

</details>

---

## 🚀 Getting Started

 Here is a simple getting started guide for the project:<br>
1. Install dependencies:
```
npm install
```
2. Start the server:
```
npm run server
```
3. Start the frontend:
```
cd frontend
npm start
```
4. Open the app in your browser at http://localhost:3000

Note: This guide assumes that you have already set up the MongoDB database and the socket.io server. If you haven't, you can find instructions for doing so in the README file in the backend directory.

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
