import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

const AUTH_KEY = "ren-auth";
const AUTH_ADMIN_KEY = "ren-auth-admin";

const ADMIN_EMAIL = "admin@ren.de";

type AuthContextValue = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (email?: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readStored(): boolean {
  try {
    return localStorage.getItem(AUTH_KEY) === "true";
  } catch {
    return false;
  }
}

function readAdminStored(): boolean {
  try {
    return localStorage.getItem(AUTH_ADMIN_KEY) === "true";
  } catch {
    return false;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(readStored);
  const [isAdmin, setIsAdmin] = useState(readAdminStored);

  useEffect(() => {
    try {
      localStorage.setItem(AUTH_KEY, isLoggedIn ? "true" : "false");
    } catch {
      // ignore
    }
  }, [isLoggedIn]);

  useEffect(() => {
    try {
      localStorage.setItem(AUTH_ADMIN_KEY, isAdmin ? "true" : "false");
    } catch {
      // ignore
    }
  }, [isAdmin]);

  const login = useCallback((email?: string) => {
    setIsLoggedIn(true);
    setIsAdmin(email?.toLowerCase().trim() === ADMIN_EMAIL);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
