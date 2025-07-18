import { type ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-100 to-pink-100 ">
      <div className="h-full flex justify-center py-10">{children}</div>
    </div>
  );
};

export default Layout;
