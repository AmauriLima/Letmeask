import { createContext, ReactNode } from 'react';
import useAuth, { User } from '../hooks/useAuth';

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: AuthContextProviderProps) {
  const { user, signInWithGoogle } = useAuth();

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
