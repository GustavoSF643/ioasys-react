import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </UserProvider>
  )
}

export default Providers;
