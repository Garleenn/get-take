import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"

export function middleware (request: NextRequest) {
	const userInSession = cookies().get('email'); // берём из кук, в сессии чел или нет, проверяем на наличие в куках имейла

	const isOnLogin = request.url.includes('/login');
	const isOnEnter = request.url.includes('/');

	if(isOnLogin) {
		if(!userInSession) {
			
			return NextResponse.next(); // если не в сессии, то пропускаем логиниться
		} else {
			return NextResponse.redirect(new URL('/', request.url));
		}
	}

	if(isOnEnter) {
		if(!userInSession) {
			return NextResponse.redirect(new URL('/Main', request.url));
		} else {
			return NextResponse.next();
		}
	}

	return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
	matcher: ['/login', '/'] // сработает только на странице login
}