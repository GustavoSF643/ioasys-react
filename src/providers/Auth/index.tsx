import { createContext, ReactNode, useContext, useState, } from "react";
import Auth from "../../services/auth";

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  auth: Auth;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth] = useState(() => {
    const tokenKey = "@ioasys:token";
    const refreshKey = "@ioasys:refresh";

    const auth = new Auth(tokenKey, refreshKey);

    return auth;
  });

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);