import type { Metadata } from "next";
import { Inter, Overpass } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const overpass = Overpass({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Rubio",
  description: "Portfolio created by Carlos Rubio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className="scroll-smooth"
      suppressHydrationWarning={true}
    >
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
