import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoodNutra - Personalized Food Recommendations for Health",
  description:
    "Get AI-powered personalized food recommendations based on your health profile, dietary preferences, and lifestyle. Discover healthy Bangladeshi cuisine tailored just for you.",
  keywords:
    "food recommendations, health, nutrition, Bangladeshi food, diet, wellness, AI",
  icons: {
    icon: "/favicon.svg",
  },
};

// SSG + ISR for the whole app
// force-static ensures pages are statically generated at build time
// revalidate enables Incremental Static Regeneration (here: every 24 hours)
export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
