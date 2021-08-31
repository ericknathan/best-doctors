import create from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  accountType: string;
  password: string;
  confirmPassword: string;
}

interface AuthState {
  user: User | null;
}

export const useAuthStore = create(set => ({
  user: {},
  setUser: (props: User) =>
    set((state: AuthState) => ({
      user: {
        ...state.user,
        ...props,
      },
    })),
}));
