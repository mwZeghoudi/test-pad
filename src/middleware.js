import { NextResponse } from "next/server";
export async function middleware(request) {
  const { pathname } = request.nextUrl
  console.log('Pathname', pathname);
  if (pathname === '/') {
    return NextResponse.redirect(new URL('sign-in', request.url))
  }
  return NextResponse.next()
}