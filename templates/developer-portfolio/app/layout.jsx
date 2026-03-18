import "../styles/globals.css"
import site from "../data/site.json"

export const metadata = {
  title: `${site.name} - ${site.heroSubtitle}`.trim(),
  description: site.bio,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

