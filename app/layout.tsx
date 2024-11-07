import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Calendar Grid",
  description: "A customizable calendar grid for managing appointments and events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
