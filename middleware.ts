import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const response = NextResponse.next();
  response.headers.set("x-beatbox-site", "true");
  return response;
}

export const config = {
  matcher: "/:path*",
};
