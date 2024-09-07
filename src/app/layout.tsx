import { NavBar, PopularPlanPopup } from "./components";
import "./globals.css";
import Image from "next/image";
export const metadata = {
  title: "Heal Inside Out",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="appLogo.jpeg" />
      </head>
      <body className="relative">
        <NavBar />
        <div className="whatsapp-button">
          <a
            href="https://wa.me/7827029302?text=Hello%20Heal%20Inside%20Out!%20I%20would%20like%20to%20know%20more%20about%20your%20programs."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="whatsapp.svg"
              width={50}
              height={50}
              alt="whatsapp image"
            />
          </a>
        </div>
        <main className="my-container bg-orange-100">{children}</main>
        <PopularPlanPopup />
      </body>
    </html>
  );
}
