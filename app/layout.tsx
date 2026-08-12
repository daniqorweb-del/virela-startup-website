import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virela – Smart Urban Gardening",
  description:
    "Virela bringt intelligente Bewässerung und zeitloses Design auf deinen Stadtbalkon.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`,
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
