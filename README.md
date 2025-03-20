# Food Delivery System

## Overview
The **Food Delivery System** is a MERN stack-based web application that connects restaurants with customers for ordering and delivering food. The platform provides features for users to browse menus, place orders, make payments, and track deliveries in real-time.

## Features
- **User Authentication**: Secure login/signup using JWT authentication.
- **Restaurant Management**: Add, edit, and manage restaurant details and menus.
- **Order Management**: Users can place, track, and cancel orders.
- **Real-Time Tracking**: Track food delivery status.
- **Payment Integration**: Secure online payments.
- **Admin Dashboard**: Manage users, restaurants, and orders.
- **Responsive Design**: Optimized for mobile and desktop.

## Tech Stack
- **Frontend**: React.js, Vite, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Stripe/Razorpay
- **State Management**: Redux Toolkit
- **Database**: MongoDB with Mongoose

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- MongoDB
- npm or yarn

### Steps to Run the Project

#### Clone the Repository
```sh
git clone https://github.com/AshishChaudhari07/Food_Delivery.git
cd Food_Delivery
```

#### Install Dependencies
##### Backend
```sh
cd backend
npm install
```
##### Frontend
```sh
cd frontend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
```

#### Run the Server
```sh
cd backend
npm start
```

#### Run the Frontend
```sh
cd frontend
npm run dev
```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/restaurants` | Fetch all restaurants |
| POST | `/api/orders` | Place an order |
| GET | `/api/orders/:id` | Fetch order details |

## Future Enhancements
- AI-based food recommendations
- Dynamic pricing based on demand
- Mobile app integration

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, contact [Ashish Chaudhary](mailto:your-ashishchaudhari19112003@gmail.com).

### GitHub Repository
[Food Delivery GitHub](https://github.com/AshishChaudhari07/Food_Delivery)
