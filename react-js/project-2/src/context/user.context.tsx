import React, { createContext, useContext, useState } from "react";

type LoginUser = {
  userName: string;
  password: string;
};

type UserContextType = {
  loginUser: LoginUser;
  handelInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type Props = {
  children: React.ReactNode;
};
export let UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  let context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser Context must be used in UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }: Props) => {
  let [loginDetails, setLoginDetails] = useState<LoginUser>({
    password: "",
    userName: "",
  });

  let handelInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };
  let shared = {
    loginUser: loginDetails,
    handelInput,
  };
  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
};
