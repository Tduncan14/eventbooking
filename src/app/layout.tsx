import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "eventbooking",
  description: "Eventbooking app",
};

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserratFont.variable} antialiased`}
         cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
