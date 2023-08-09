import React from "react";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <main className="m-auto max-w-screen-xl p-4">{children}</main>
    </>
  );
}

export default Layout;
