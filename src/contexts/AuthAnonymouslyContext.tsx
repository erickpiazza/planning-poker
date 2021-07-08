import { useState } from "react";
import { createContext, ReactNode } from "react";

import { firebase } from "../services/firebase";

type User = {
  id: string | undefined;
  name: string | undefined;
};

type AuthContextType = {
  user: User | undefined;
  signInAnonymously: (nickName: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthAnonymouslyContext = createContext({} as AuthContextType);

export function AuthAnonymouslyProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  async function signInAnonymously(nickName: string) {
    // https://firebase.google.com/docs/reference/js/firebase.User
    const unsubscribe = firebase.auth().onAuthStateChanged((userData) => {
      if (userData) {
        setUser({ id: userData.uid, name: nickName });
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .then((userCreated) => {
            if (userCreated.user?.uid) {
              setUser({ id: userCreated.user?.uid, name: nickName });
            }
          })
          .catch((error) => {});
      }
    });
    unsubscribe();

    return;
  }

  const _return: AuthContextType = {
    user,
    signInAnonymously,
  };

  return (
    <AuthAnonymouslyContext.Provider value={_return}>
      {props.children}
    </AuthAnonymouslyContext.Provider>
  );
}
