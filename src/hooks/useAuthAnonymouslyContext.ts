import { useContext } from "react";
import { AuthAnonymouslyContext } from "../contexts/AuthAnonymouslyContext";

export function useAuthAnonymously() {
  const value = useContext(AuthAnonymouslyContext);
  return value;
}
