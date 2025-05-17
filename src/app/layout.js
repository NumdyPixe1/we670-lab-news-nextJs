import './globals.css';

export const metadata = {
  title: 'Lab02-Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
