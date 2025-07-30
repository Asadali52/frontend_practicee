# Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/test-project

# JWT Secret for token signing
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Next.js Environment
NODE_ENV=development
```

## Testing the Login Flow

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Create a test user:**
   - Go to `/signup` page
   - Fill in the registration form with your details
   - Submit the form to create a new user

3. **Test the login:**
   - Go to `/login` page
   - Enter the email and password you used during signup
   - Click "Sign in"
   - You should be redirected to `/home` page after successful login

4. **Verify authentication:**
   - The home page should show a welcome message with your name
   - You should see a logout button in the header
   - Try accessing `/home` directly - you should stay on the page if logged in
   - Try logging out and accessing `/home` - you should be redirected to `/login`

## Fixed Issues

The login redirect issue has been fixed by:

1. **Updated login page** (`src/app/login/page.tsx`):
   - Now properly stores user data in localStorage
   - Uses `router.push('/home')` for navigation
   - Shows success toast on successful login

2. **Updated home page** (`src/app/home/page.tsx`):
   - Added authentication check on page load
   - Shows loading state while checking authentication
   - Redirects to login if not authenticated
   - Displays user information and logout button

3. **Updated middleware** (`src/middleware.ts`):
   - Modified to allow client-side authentication handling
   - No longer blocks requests to protected routes
   - Lets client-side code handle authentication checks

4. **Added logout functionality**:
   - Created logout API route (`src/app/api/auth/logout/route.ts`)
   - Added logout button to home page
   - Properly clears localStorage on logout

## Features

- ✅ User registration and login
- ✅ JWT token authentication
- ✅ Protected routes with client-side checks
- ✅ User session management
- ✅ Logout functionality
- ✅ Responsive design with modern UI
- ✅ Loading states and error handling 