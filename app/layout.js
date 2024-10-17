import "./globals.css"


export const metadata = {
  title: "Dualvideo",
  description: "Fabio Vaz",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
