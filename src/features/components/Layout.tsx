import { type ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-teal-100 via-lime-100 to-pink-100 ">
      <div className="h-full flex justify-center py-4 md:py-10">{children}</div>
    </div>
  );
};

export default Layout;
