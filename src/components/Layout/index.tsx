import React from "react";
import NavBar from "../NavBar";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <main className="m-auto max-w-screen-xl px-[150px]">{children}</main>
    </div>
  );
}

export default Layout;
