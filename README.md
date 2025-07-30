# Authentication System with Next.js and MongoDB

A complete authentication system built with Next.js, MongoDB, and JWT tokens. Features user registration, login, and protected routes.

## Features

- ✅ User registration with password hashing
- ✅ User login with JWT token authentication
- ✅ Protected routes with middleware
- ✅ MongoDB integration with Mongoose
- ✅ Form validation and error handling
- ✅ Responsive UI with Tailwind CSS
- ✅ Toast notifications for user feedback
- ✅ Secure password storage with bcrypt

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React icons
- **Notifications**: React Hot Toast

## Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud instance)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXTAUTH_SECRET=your-nextauth-secret-key
```

**Important**: 
- Replace `your-super-secret-jwt-key-change-this-in-production` with a strong secret key
- For production, use a cloud MongoDB instance (MongoDB Atlas)
- Update the MongoDB URI accordingly

### 3. Start MongoDB

#### Local MongoDB:
```bash
# Install MongoDB locally or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

#### MongoDB Atlas (Recommended for production):
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string and update `MONGODB_URI` in `.env.local`

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### POST `/api/auth/signup`
Register a new user.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "...",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "jwt_token_here"
}
```

### POST `/api/auth/login`
Login with existing credentials.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": "...",
    "firstName": "John",
    "lastName": "Doe", 
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "jwt_token_here"
}
```

## Project Structure

```
src/
├── app/
│   ├── api/auth/
│   │   ├── login/route.ts      # Login API endpoint
│   │   └── signup/route.ts     # Signup API endpoint
│   ├── home/page.tsx           # Protected home page
│   ├── login/page.tsx          # Login page
│   └── signup/page.tsx         # Signup page
├── lib/
│   └── mongodb.ts              # MongoDB connection utility
├── models/
│   └── User.ts                 # User model schema
└── middleware.ts               # Route protection middleware
```

## Security Features

- **Password Hashing**: Passwords are hashed using bcrypt with 12 salt rounds
- **JWT Tokens**: Secure authentication tokens with 7-day expiration
- **Input Validation**: Server-side validation for all inputs
- **Protected Routes**: Middleware protects routes requiring authentication
- **Error Handling**: Comprehensive error handling and user feedback

## Customization

### Adding New Protected Routes

1. Update the `protectedRoutes` array in `src/middleware.ts`:
```typescript
const protectedRoutes = ['/home', '/profile', '/dashboard', '/your-new-route'];
```

### Styling

The project uses Tailwind CSS with custom styling preferences:
- Font family: Nunito
- Input height: 42px
- Input styling: Gray border, transparent background on focus
- Placeholder color: text-gray-300

### Database Schema

The User model includes:
- `firstName` (required)
- `lastName` (required) 
- `email` (required, unique, validated)
- `password` (required, min 6 characters)
- `createdAt` and `updatedAt` timestamps

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

- **Netlify**: Configure build settings for Next.js
- **Railway**: Add MongoDB addon and configure environment variables
- **Heroku**: Add MongoDB addon and configure buildpacks

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**: 
   - Check if MongoDB is running
   - Verify connection string in `.env.local`
   - Ensure network access if using cloud MongoDB

2. **JWT Token Issues**:
   - Verify `JWT_SECRET` is set in environment variables
   - Check token expiration (default: 7 days)

3. **Build Errors**:
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `npm install`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own applications!
# frontend_practicee
# frontend_practicee
# frontend_practicee
