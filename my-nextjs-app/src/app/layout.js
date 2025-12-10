import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js with hands-on examples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <a href="/" style={{ marginRight: "10px" }}>Home</a>
          <a href="/about" style={{ marginRight: "10px" }}>About</a>
          <a href="/blog/first-post">Blog Example</a>
        </nav>
        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
