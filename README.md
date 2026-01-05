# 🎯 Interview Platform

A modern, real-time interview platform with integrated video calling, collaborative code editing, and problem-solving features. Built for conducting technical interviews seamlessly.

## ✨ Features

- 🎥 **Real-time Video Calling** - Built with Stream.io for high-quality video interviews
- 💻 **Collaborative Code Editor** - Live code editing with syntax highlighting
- 📝 **Problem Management** - Curated coding problems for technical assessments
- 🔐 **Authentication** - Secure user authentication with Clerk
- 📊 **Session Management** - Track and manage interview sessions
- 🎨 **Modern UI** - Beautiful interface with Tailwind CSS and DaisyUI
- ⚡ **Real-time Updates** - Live collaboration features

## 📸 Screenshots

### Interview Session Interface
![Interview Session](./screenshots/image.png)
*Real-time collaborative coding with integrated video chat and problem solving*

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library
- **Clerk** - Authentication
- **Stream.io** - Video SDK
- **Monaco Editor** - Code editor
- **Axios** - HTTP client
- **React Router** - Routing

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Piston API** - Code execution engine

## 📦 Project Structure

```
Interview-Platform/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── api/            # API calls
│   │   └── data/           # Static data
│   ├── public/             # Static assets
│   └── package.json
│
└── backend/
    ├── models/             # Database models
    ├── routes/             # API routes
    ├── controllers/        # Route controllers
    ├── middleware/         # Custom middleware
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Clerk Account
- Stream.io Account

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/Om2407/Interview-Platform.git
cd Interview-Platform
```

#### 2. Setup Backend

```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
FRONTEND_URL=http://localhost:5173
```

Start backend server:
```bash
npm run dev
```

#### 3. Setup Frontend

```bash
cd frontend
npm install --legacy-peer-deps
```

Create `.env` file in frontend directory:
```env
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
```

Start frontend development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🌐 Deployment

### Frontend (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install --legacy-peer-deps && npm run build`
   - **Publish Directory**: `dist`
4. Add environment variables
5. Deploy

### Backend (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add environment variables
5. Deploy

## 📝 Environment Variables

### Frontend
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk authentication key |
| `VITE_STREAM_API_KEY` | Stream.io API key |

### Backend
| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGODB_URI` | MongoDB connection string |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `FRONTEND_URL` | Frontend URL for CORS |
| `STREAM_API_KEY` | Stream.io API key |
| `STREAM_API_SECRET` | Stream.io API secret |

## 🎯 Usage

1. **Sign Up / Login** - Create an account or login using Clerk authentication
2. **Create Session** - Start a new interview session
3. **Join Session** - Share session link with participants
4. **Select Problem** - Choose a coding problem from the library
5. **Collaborate** - Use video call and code editor simultaneously
6. **Execute Code** - Run code in multiple languages
7. **Track Progress** - Monitor active and past sessions

## 🧪 Available Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend
```bash
npm start            # Start production server
npm run dev          # Start development server with nodemon
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Om Gupta**
- GitHub: [@Om2407](https://github.com/Om2407)

## 🙏 Acknowledgments

- [Stream.io](https://getstream.io/) for video SDK
- [Clerk](https://clerk.com/) for authentication
- [Piston](https://github.com/engineer-man/piston) for code execution
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for code editing

## 📞 Support

For support, email guptaom203@gmail.com or open an issue in the repository.

---

Made with ❤️ by Om Guptaom
