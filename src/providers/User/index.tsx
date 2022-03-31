import { createContext, ReactNode, useContext, useState } from "react";
import { IUser } from "../../types/user";

interface UserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  user: IUser;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);