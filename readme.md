# 💬 MERN Stack Real-Time Chat Application

A modern, full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring Socket.IO for real-time messaging, JWT authentication, and image sharing capabilities.

## ✨ Features

### 🔐 Authentication & Security

- User registration and login
- JWT-based authentication with HTTP-only cookies
- Protected routes and middleware
- Secure password hashing with bcrypt

### 💬 Real-Time Messaging

- Instant messaging with Socket.IO
- Real-time online user status
- Message delivery confirmation
- Typing indicators support

### 🖼️ Media Sharing

- Image upload and sharing via Cloudinary
- Profile picture management
- Optimized image storage and delivery

### 🎨 Modern UI/UX

- Responsive design with Tailwind CSS
- Dark/Light theme support
- Clean and intuitive interface
- DaisyUI components for enhanced styling
- Loading skeletons for better UX

### 📱 Additional Features

- User profiles and settings
- Online/offline status indicators
- Message history
- Cross-platform compatibility

## 🛠️ Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **Socket.IO** - Real-time communication
- **JWT** - Authentication tokens
- **Cloudinary** - Image upload and storage
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend

- **React 18** - UI library with hooks
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **Axios** - HTTP client
- **Socket.IO Client** - Real-time client
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS components
- **Lucide React** - Icon library
- **React Hot Toast** - Notifications

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Cloudinary Account** (for image uploads)

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/hardik18-hk19/Batiyao-Aaram-Se.git
cd chat_app
```

### 2. Install dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/chat_app
# OR for MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chat_app

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Server Configuration
PORT=5001
NODE_ENV=development

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4. Database Setup

Make sure MongoDB is running on your local machine or set up a MongoDB Atlas cluster and update the connection string in your `.env` file.

## 🏃‍♂️ Running the Application

### Development Mode

1. **Start the backend server:**

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:5001`

2. **Start the frontend development server:**

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

### Production Mode

1. **Build the application:**

```bash
npm run build
```

2. **Start the production server:**

```bash
npm start
```

## 📁 Project Structure

```
chat_app/
├── backend/
│   ├── src/
│   │   ├── controllers/         # Route handlers
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── lib/                 # Utility libraries
│   │   │   ├── cloudinary.js    # Image upload config
│   │   │   ├── db.js            # Database connection
│   │   │   ├── socket.js        # Socket.IO setup
│   │   │   └── utils.js         # Helper functions
│   │   ├── middleware/          # Custom middleware
│   │   │   └── auth.middleware.js
│   │   ├── models/              # Database schemas
│   │   │   ├── message.model.js
│   │   │   └── user.model.js
│   │   ├── routes/              # API routes
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   └── index.js             # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── pages/              # Page components
│   │   ├── store/              # Zustand state stores
│   │   ├── lib/                # Frontend utilities
│   │   ├── assets/             # Static assets
│   │   └── constants/          # App constants
│   └── package.json
└── package.json                # Root package.json
```

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /signup` - Register a new user
- `POST /login` - Login user
- `POST /logout` - Logout user
- `PUT /update-profile` - Update user profile
- `GET /check` - Check authentication status

### Message Routes (`/api/messages`)

- `GET /users` - Get all users for sidebar
- `GET /:id` - Get messages with a specific user
- `POST /send/:id` - Send a message to a user

## 🔄 Real-Time Events

### Socket.IO Events

- `connection` - User connects to the server
- `disconnect` - User disconnects from the server
- `getOnlineUsers` - Broadcast online users list
- `newMessage` - Real-time message delivery

## 🎨 Styling & Theming

The application uses:

- **Tailwind CSS** for utility-first styling
- **DaisyUI** for pre-built components
- **Custom CSS** for specific styling needs
- **Theme switching** between light and dark modes

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- Desktop computers
- Tablets
- Mobile devices

## 🔧 Available Scripts

### Root Directory

- `npm run build` - Build both frontend and backend
- `npm start` - Start production server

### Backend Directory

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend Directory

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify network access for MongoDB Atlas

2. **Cloudinary Upload Issues**

   - Verify Cloudinary credentials in `.env`
   - Check API limits and usage

3. **Socket.IO Connection Issues**

   - Ensure backend server is running
   - Check CORS configuration
   - Verify frontend Socket.IO client connection

4. **Build Errors**
   - Clear node_modules and reinstall dependencies
   - Check Node.js version compatibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- Cloudinary for image management
- Tailwind CSS and DaisyUI for styling
- MongoDB for database solutions
- React and Node.js communities

## 📞 Contact

For any questions or suggestions, feel free to reach out:

- **GitHub**: [@hardik18-hk19](https://github.com/hardik18-hk19)
- **Repository**: [Batiyao-Aaram-Se](https://github.com/hardik18-hk19/Batiyao-Aaram-Se)

---

⭐ If you found this project helpful, please give it a star on GitHub!
