// Import global CSS styles for the application.
import "./globals.css";
// Import the 'Inter' font from Google Fonts using the 'next/font' package.
import { Inter } from "next/font/google";
import { Providers } from "./providers";

// Define a variable 'inter' to load the 'Inter' font with a Latin character subset.
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the application, including the title and description.
export const metadata = {
  title: "Chakra UI, React, Github API",
  description: "GitHub User Finder",
};

// Define the 'RootLayout' component which receives 'children' as props.
export default function RootLayout({ children }) {
  return (
    // Start an HTML document with the language set to English.
    <html lang="en">
      <body className={inter.className}>
        <Providers>Providers</Providers>
      </body>
    </html>
  );
}
