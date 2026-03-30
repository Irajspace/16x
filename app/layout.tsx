import Providers from "../components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-black antialiased overflow-x-hidden`}>
        <Providers>

          <div className="min-h-screen w-full flex flex-col">
            {children}
          </div>

        </Providers>
      </body>
    </html>
  );
}