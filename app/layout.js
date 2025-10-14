import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import NavMenu from "@/components/nav-menu";
import Footer from "@/components/footer";

const poppins = Poppins({
 weight: "400",
 subsets: ["latin"],
});

const legquinne = localFont({
 variable: "--font-legquinne",
 src: "../fonts/Legquinne-Regular.otf",
});

export const metadata = {
 title: "Recipe Book",
 description: "Final project ITPE 7",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body
    className={`${poppins.className} ${legquinne.variable} bg-background-ni-carmel antialiased selection:bg-orange-ni-carmel selection:text-background-ni-carmel`}
   >
    {/* nav */}
    <NavMenu />

    {/* main content */}
    <main className="mt-10 mx-auto">{children}</main>

    {/* footer */}
    <Footer />
   </body>
  </html>
 );
}
