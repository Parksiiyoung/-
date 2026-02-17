import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { AuthState, UserRole } from '../types';

const STORAGE_KEY = 'bitnaneun_auth';

interface AuthContextValue {
  state: AuthState;
  login: (password: string, role: UserRole) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  state: { isAuthenticated: false, role: null, token: null },
  login: () => false,
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

const PASSWORDS: Record<UserRole, string> = {
  admin: 'bitnaneun2006',
  client: 'client2026',
  team: 'team2026',
};

function createToken(role: UserRole): string {
  const payload = { role, ts: Date.now() };
  return btoa(JSON.stringify(payload));
}

function parseToken(token: string): { role: UserRole; ts: number } | null {
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
}

function loadState(): AuthState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { isAuthenticated: false, role: null, token: null };
    const parsed = parseToken(stored);
    if (!parsed) return { isAuthenticated: false, role: null, token: null };
    const oneDay = 24 * 60 * 60 * 1000;
    if (Date.now() - parsed.ts > oneDay) {
      localStorage.removeItem(STORAGE_KEY);
      return { isAuthenticated: false, role: null, token: null };
    }
    return { isAuthenticated: true, role: parsed.role, token: stored };
  } catch {
    return { isAuthenticated: false, role: null, token: null };
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>(loadState);

  const login = useCallback((password: string, role: UserRole): boolean => {
    if (PASSWORDS[role] === password) {
      const token = createToken(role);
      localStorage.setItem(STORAGE_KEY, token);
      setState({ isAuthenticated: true, role, token });
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState({ isAuthenticated: false, role: null, token: null });
  }, []);

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
