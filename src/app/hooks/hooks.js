import { useContext } from "react";

import { GenerationContext } from "../context/context";

export function useGeneration() {
  const {
    state: { generation },
    actions: { selectGeneration },
  } = useContext(GenerationContext);

  return [generation, selectGeneration];
}
