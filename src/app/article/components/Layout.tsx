import React, { ReactNode } from "react";
import Hero from "./Hero";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Hero />
      <section className="mx-auto flex w-full max-w-6xl pt-10">
        <div className="w-[65rem] p-4 space-y-16">{children}</div>
        <SideBar />
      </section>
    </main>
  );
};

export default Layout;
