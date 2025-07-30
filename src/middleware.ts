import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  // Get the token from the Authorization header
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  // Define protected routes
  const protectedRoutes = ['/home', '/features', '/pricing', '/about', '/blog', '/careers', '/contact', '/users'];
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // For client-side navigation, we'll let the page handle authentication
    // The middleware will only redirect if there's no token in the header
    if (!token) {
      // Allow the request to proceed - the client-side code will handle redirect if needed
      return NextResponse.next();
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('user', JSON.stringify(decoded));

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error(error)
      // Allow the request to proceed - the client-side code will handle redirect if needed
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 