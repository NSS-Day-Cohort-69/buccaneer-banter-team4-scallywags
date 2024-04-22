export const metadata = {
  title: "Buccaneer's Banter",
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300&family=Pirata+One&display=swap"
          rel="stylesheet" />
      </head>
      <body className="font-serif">{children}</body>
    </html>
  )
}
