import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedPaths = ['/home']
const authPages = ['/login', '/register']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('jwtToken')?.value
  const { pathname } = request.nextUrl

  if (token && authPages.includes(pathname)) {
    console.log(`Middleware: Authenticated user on ${pathname}, redirecting to /home.`);
    return NextResponse.redirect(new URL('/home', request.url));
  }

  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path)
  )

  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url)

    console.log('Middleware: No token found for protected route, redirecting to login.')
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {

  matcher: [
    '/((?!api|_next/static|_next/image|favicon\.ico).*)',
  ],
}