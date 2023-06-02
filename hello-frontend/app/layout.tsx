import Navbar from "./Navbar"

export const metadata = {
  title: 'Admin Portal',
  description: 'Dashboard for infrastructure provisioning',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html>
      <body>
      <Navbar/>
        {children}
      </body>
        
    </html>
      )
}

