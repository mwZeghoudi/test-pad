import { NextResponse } from "next/server";
import { getUser } from "./lib/auth";
const dashboardRoutes = [
  '/dashboard',
  '/deals',
  '/analytics',
  '/staff',
  '/notification',
  '/profile',
]
export async function middleware(request) {
  const { pathname } = request.nextUrl
  const isProtected = dashboardRoutes.some((r) => pathname.startsWith(r))
  if (pathname === '/') {
    return NextResponse.redirect(new URL('dashboard', request.url))
  } else if (isProtected) {
    const user = await getUser()
    if (!user) {
      return NextResponse.redirect(new URL('sign-in', request.url))
    }
  }
  return NextResponse.next()
}