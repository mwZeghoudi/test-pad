import { NextResponse } from "next/server";
import { getUser, validatEmail } from "./lib/auth";
import { cookies } from "next/headers"; // Permet de gérer les cookies dans Middleware

const loginRoute = [
  '/sign-in',
  '/sign-up',
  '/reset-password',
];
const avoidRoute = [
  '/_next',
  '/static',
  '/api'
]
const authControl = '/authentication';

export async function middleware(request) {
  const url = request.nextUrl;
  const { pathname, searchParams } = url;
  const isAvoid = avoidRoute.some((r) => pathname.startsWith(r));
  if (isAvoid || pathname.includes('.')) {
    return NextResponse.next();
  }
  console.log("Middleware exécuté sur :", pathname);
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  if (pathname.startsWith(authControl)) {
    const cookieStore = await cookies();
    let redirect = '/sign-in';
    switch (pathname.replace(authControl, '')) {
      case '/login':
        const params = {
          userId: searchParams.get("UserId"),
          token: searchParams.get("Token")
        };
        console.log(params);
        const success = await validatEmail(params);
        cookieStore.set("validEmail", success.toString(), {
          maxAge: 60 * 60,
        });
        break;
      case '/reset-password':
        cookieStore.set("resetToken", searchParams.get('token'), {
          maxAge: 600
        });
        cookieStore.set("email", searchParams.get('email'), {
          maxAge: 600
        });
        redirect = '/reset-password';
        break;
    }
    return NextResponse.redirect(new URL(redirect, request.url));
  }
  const isLogin = loginRoute.some((r) => pathname.startsWith(r));
  if (!isLogin) {
    const user = await getUser();
    if (!user) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }

  return NextResponse.next();
}