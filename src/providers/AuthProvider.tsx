import SecureStorageService from "@services/SecureStorage.service";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const loadToken = async () => {
      const { accessToken } = await SecureStorageService.getTokensFromLocal();
      if (accessToken) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    loadToken();
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};
