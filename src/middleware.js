import { cookies } from "next/headers";
import { NextRequest,NextResponse } from "next/server";
// const prodectRoutes=['/profile']
const protectedRoutes = ['/profile',]; 
export default function middleware(request){
   const cookieStore = cookies();
   const cookieValue = cookieStore.get("uid");
    const uid=cookieValue?.value
   if(!uid && protectedRoutes.includes(request.nextUrl.pathname)){
      return NextResponse.redirect(new URL("/login", request.url))
   }

}
// export const config = {
//    matcher: ['/profile'],
//  }
