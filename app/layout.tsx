import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import NextContext from "./context/NextContext";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";

const poppins: any = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "StudyTec",
  description: "StudyTec",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <AuthContext>
          <NextContext>
            <ToasterContext />
            {children}
          </NextContext>
        </AuthContext>
      </body>
    </html>
  );
}
