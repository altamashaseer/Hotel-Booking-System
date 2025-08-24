# Full-Stack Hotel Booking System

This project is a full-stack hotel booking application built using the MERN stack (MongoDB, Express, React, Node.js). The system allows users to browse hotels, view room details, check availability, and make bookings with secure authentication. It includes both the frontend and backend components and is designed to provide a responsive, smooth user experience.

## Features

- **User Authentication**: Secure login and registration with encrypted passwords.
- **Browse Hotels**: Users can search for hotels, filter by location, price, and more.
- **Booking System**: Book rooms with real-time availability checks.
- **User Dashboard**: View and manage bookings.
- **Admin Dashboard**: Manage hotel data, rooms, and bookings.
- **Responsive UI**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, CSS, Bootstrap (or other CSS frameworks as needed)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) for secure user sessions
- **Deployment**: Hosted on services like Heroku (backend) and Netlify/Vercel (frontend)

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed or a MongoDB Atlas account

### Installation

1. **Install dependencies for both frontend and backend:**
   - For the backend:
     ```bash
     cd api
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../client
     npm install
     ```
   - For the admin dashboard:
     ```bash
     cd ../admin
     npm install
     ```

3. **Environment Variables**:
   Create a `.env` file in the `api` directory with the following:
   ```plaintext
   MONGO=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   CLOUD_NAME=your-cloudinary-cloud-name
   API_KEY=your-cloudinary-api-key
   CLOUD_SECRET=your-cloudinary-api-secret
   ```

### Running the Project

1. **Backend**:
   In the `api` directory, run:
   ```bash
   npm start
   ```

2. **Frontend**:
   In the `client` directory, run:
   ```bash
   npm start
   ```

3. **Admin Dashboard**:
   In the `admin` directory, run:
   ```bash
   npm start
   ```

4. **Access the application**:
   - Frontend: `http://localhost:5173` (or as indicated by Vite)
   - Admin: `http://localhost:5174` (or as indicated by Vite)
   - Backend (API): `http://localhost:8001`

## Project Structure

```
hotel-booking-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
└── README.md
```

- **Backend**: Contains the server code, routes, models, and controllers for the API.
- **Frontend**: React code, organized into components and pages for a smooth user experience.

## API Endpoints

- **User Authentication**: `/api/auth/`
- **Hotel Management**: `/api/hotels/`
- **Room Management**: `/api/rooms/`
- **Booking**: `/api/bookings/`

## Future Enhancements

- Implement additional payment gateway integration.
- Add user review and rating system for hotels.
- Enhanced search filters for improved user experience.
  

