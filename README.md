## Smartwinnr Admin Dashboard Assignment

## Tech Stack-

    Backend:Node.js, Express.js
    Database: MongoDB
    Authentication: JWT, bcrypt
    Other Libraries: dotenv

## Backend used-

    Node.js v22.14.0
    npm v11.6.2
    MongoDB v8.0.16
    Postman for testing

## Setup instructions-

# 1. Clone the repository:

        git clone https://github.com/mk367621/SmartWinnr-Project
        cd backend

# 2. Install dependencies:

        npm install

# 3. Create a .env file:

        PORT=3000
        MONGO_URI=<your-mongodb-atlas-connection-string>
        JWT_SECRET=<your-secret-key>

# 4. Run the server:

        npm run start (or) node server.js

# 5. Test APIs using Postman or similar:

        POST /signup → register user

        POST /signin → login user and get JWT

        GET /profile → view authenticated user profile

        Admin-only routes: /stats/total-users, /stats/total-orders, /metrics
