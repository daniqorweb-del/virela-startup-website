import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virela – Smart Urban Gardening",
  description:
    "Fiktives Portfolio-Konzept: Virela zeigt eine responsive Smart-Gardening-Landingpage für kleine Stadtbalkone.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_VIRELA_BASE_PATH ?? ""}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
