import { NextResponse } from 'next/server';

//ลูกที่ตาม /news จะแสดง console.log เช่น /news/adv
export const config = {
    matcher: ['/news/:path*', '/api/:path*'],
  };
export function middleware(request) {
    const { pathname } = request.nextUrl;
  
  // ตัวอย่าง redirect (กรณีผู้ใช้ไม่ได้ login)
  // if (!request.cookies.get('auth')) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

    // บล็อกการลบข่าว ถ้าไม่ได้ส่ง header x-admin=true
    if (pathname.startsWith('/api/news') && request.method === 'DELETE') {
      const isAdmin = request.headers.get('x-admin') === 'true';
      if (!isAdmin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }
  
    return NextResponse.next();
  }