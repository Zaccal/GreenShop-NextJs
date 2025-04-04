"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

function SessionProviderClient({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionProviderClient;
