import { create } from "zustand";

interface AuthState {
  user: null | { username: string; email: string };
  isLoggingIn: boolean;
  isSigningUp: boolean;
  error: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signup: (userData: {
    username: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggingIn: false,
  isSigningUp: false,
  error: null,

  login: async (credentials) => {
    set({ isLoggingIn: true, error: null });
    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Login failed");

      set({ user: data.user, isLoggingIn: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoggingIn: false });
    }
  },

  signup: async (userData) => {
    set({ isSigningUp: true, error: null });
    try {
      const response = await fetch("http://localhost:3000/api/v1/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Signup failed");

      set({ user: data.user, isSigningUp: false });
    } catch (error) {
      set({ error: (error as Error).message, isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      await fetch("http://localhost:3000/api/v1/logout", {
        method: "POST",
        credentials: "include",
      });
      set({ user: null });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));
