import { Singletone } from "./Singletone";

export function SingletoneDemonstration() {
  const s1 = Singletone.getInstance();
  const s2 = Singletone.getInstance();

  console.log(s1 === s2);
}
