"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { AuthState, User } from "@/types/user";

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  const login = useCallback(async (email: string, _password: string) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    // Mock login — replace with real API call
    await new Promise((res) => setTimeout(res, 500));
    const mockUser: User = {
      id: "u1",
      name: "Demo User",
      email,
      role: "student",
      enrolledCourses: [],
      createdAt: new Date().toISOString(),
    };
    setState({ user: mockUser, isAuthenticated: true, isLoading: false });
  }, []);

  const logout = useCallback(() => {
    setState({ user: null, isAuthenticated: false, isLoading: false });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
