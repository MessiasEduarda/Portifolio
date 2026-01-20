import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import { AuthProvider } from "@/hooks/useAuth";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cabourg Fonts
const cabourgRegular = localFont({
  src: "../fonts/CabourgOT-Regular.otf",
  variable: "--font-cabourg-regular",
  display: "swap",
});

const cabourgBold = localFont({
  src: "../fonts/CabourgOT-Bold.otf",
  variable: "--font-cabourg-bold",
  display: "swap",
});

// Inter Variable (local)
const interVariable = localFont({
  src: "../fonts/InterVariable-Italic.ttf",
  variable: "--font-inter-variable",
  display: "swap",
  style: "italic",
});

const interVariableRegular = localFont({
  src: "../fonts/InterVariable.ttf",
  variable: "--font-inter-variable-regular",
  display: "swap",
});

// Metropolis Fonts
const metropolisRegular = localFont({
  src: "../fonts/Metropolis-Regular.otf",
  variable: "--font-metropolis-regular",
  display: "swap",
});

const metropolisSemiBold = localFont({
  src: "../fonts/Metropolis-SemiBold.otf",
  variable: "--font-metropolis-semibold",
  display: "swap",
});

// Roboto Fonts
const robotoRegular = localFont({
  src: "../fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
  display: "swap",
});

const robotoMedium = localFont({
  src: "../fonts/Roboto-Medium.ttf",
  variable: "--font-roboto-medium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfólio | Maria Eduarda",
  description: "Portfólio profissional de Maria Eduarda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cabourgRegular.variable} ${cabourgBold.variable} ${interVariable.variable} ${interVariableRegular.variable} ${metropolisRegular.variable} ${metropolisSemiBold.variable} ${robotoRegular.variable} ${robotoMedium.variable} antialiased bg-white text-black`}
      >
        <StyledComponentsRegistry>
          <AuthProvider>
            <Navbar />
            {children}
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}