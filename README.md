## Smartwinnr Admin Dashboard Assignment

## Tech Stack-

    Backend:Node.js, Express.js
    Frontend: Angular
    Database: MongoDB
    Authentication: JWT, bcrypt
    Other Libraries: dotenv, mongoose

## Backend used-

    Node.js v22.14.0
    npm v11.6.2
    MongoDB v8.0.16
    Postman for testing

## Backend Setup instructions-

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

# 5. Test APIs using Postman:

        POST /signup → register user

        POST /signin → login user and get JWT

        GET /profile → view authenticated user profile

        Admin-only routes: /stats/total-users, /stats/total-orders, /metrics

# 6. Backend will run at:

        http://localhost:3000

## Frontend used:

        Angular CLI       : 21.0.2
        Node.js           : 22.14.0
        Package Manager   : npm 11.6.2

## Frontend setup instructions-

# 1. Navigate to frontend folder:

        cd frontend

# 2. Install dependencies:

        npm install

# 3. Run Angular:

        ng serve

# 4. Frontend will run at:

        http://localhost:4200

## Test Login Credentials-

# 1. Admin Account

        Email: john@test.com
        Password: 123456

# 2. Normal User Account

        Email: user5@test.com
        Password: 1234
