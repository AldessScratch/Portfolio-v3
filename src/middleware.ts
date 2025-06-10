import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware"
// src/middleware.ts
export function middleware(request: NextRequest) {
  request.headers.set("X-Frame-Options", "DENY");
  request.headers.set("X-Content-Type-Options", "nosniff");
  request.headers.set("X-XSS-Protection", "1; mode=block");
  return NextResponse.next();
}