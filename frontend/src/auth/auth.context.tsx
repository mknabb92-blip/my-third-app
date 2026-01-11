import { createContext, useContext, useState } from "react";

type User = {
  email: string;
};

type AuthContextType = {
  user: User | null;
  loginUser: (user: User) => void;
  logoutUser: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function loginUser(user: User) {
    setUser(user);
  }

  function logoutUser() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}