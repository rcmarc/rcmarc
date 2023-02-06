import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="h-screen text-slate-300 bg-slate-800 p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
