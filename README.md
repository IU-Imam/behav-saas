# Behav

**Behav** is a user behavior analysis SaaS application designed to help businesses analyze user interactions on their websites or applications. This project provides tools for user registration, login, and access to user analytics.

## Features

- **User Registration**: Users can create accounts to access the platform.
- **User Login**: Secure login using JWT (JSON Web Tokens) for authentication.
- **Analytics Dashboard**: Users can view their behavior analytics after logging in.
- **RESTful API**: The backend is built with Node.js and Express, providing a robust API for the frontend.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Integration**: Stripe (planned)

## Project Structure

behav ├── client # Frontend files │ ├── node_modules
│ ├── public
│ ├── src
│ │ ├── App.js
│ │ ├── Dashboard.js
│ │ └── index.js
│ ├── .gitignore
│ ├── package-lock.json
│ └── package.json
│ 
├── node_modules
├── server
│ ├── controllers
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── database.js
│ └── server.js
├── .env
├── package-lock.json
├── package.json
└── README.md



## Installation

### Prerequisites

- Node.js
- MongoDB
- A Stripe account (for payment integration)

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/IU-Imam/behav-saas.git
   cd behav-saas


2. Install dependencies:

Navigate to the client directory and install client dependencies:

   
      cd client
      npm install


Navigate back to the root and install server dependencies:

  
      cd ..
      npm install


Set up environment variables:

Create a .env file in the root directory and add your configuration:

    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    STRIPE_SECRET_KEY=your_stripe_secret_key
    CLIENT_URL=http://localhost:3001
Run the application:

Start the server:


    node server/server.js
In a new terminal, start the client:


    cd client
    npm start
Usage
Visit http://localhost:3001 to access the frontend.
Use the registration and login features to create an account and access the analytics dashboard.


Contributions are welcome! Please open an issue or submit a pull request.



Acknowledgments
React
Node.js
Express
MongoDB
Stripe
