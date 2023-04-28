import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata = {
  title: {
    default: "TIG",
    template: "%s | tig.com",
  },
  description: "Video Production xompany",
  openGraph: {
    title: "tig.com",
    description: "production company",
    url: "https://tig.com",
    siteName: "tig.com",
    images: [
      {
        url: "https://pritzz.online",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "TIG",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.jpg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={
          `bg-black`

          // ${
          // 	process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          // }`
        }
      >
        {/* <Analytics /> */}
        {children}
      </body>
    </html>
  );
}
