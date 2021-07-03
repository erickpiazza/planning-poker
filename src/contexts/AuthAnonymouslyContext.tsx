import { useState } from "react";
import { createContext, ReactNode } from "react";

import { firebase } from "../services/firebase";

type User = {
  id: string | undefined;
  name: string;
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
        console.log("teste user", user);
        console.log("logged user", userData.uid);
        setUser({ id: userData.uid, name: nickName });
      } else {
        console.log("não logado");
        firebase
          .auth()
          .signInAnonymously()
          .then((userCreated) => {
            if (userCreated.user?.uid) {
              setUser({ id: userCreated.user?.uid, name: nickName });
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
        console.log("criou login");
      }
    });
    console.log("use contexto", user);
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
