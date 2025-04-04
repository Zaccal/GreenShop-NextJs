import { ReactNode } from "react";
import SessionProviderClient from "./SessionProviderClient";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SessionProviderClient>{children}</SessionProviderClient>
    </>
  );
};

export default Providers;
