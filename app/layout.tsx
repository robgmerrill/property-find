import { ReactNode } from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "Property Finder",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property",
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
