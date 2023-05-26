export const metadata = {
  title: 'Admin Portal',
  description: 'Dashboard for infrastructure provisiioning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
