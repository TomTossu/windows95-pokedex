import { useContext } from "react";

import { GenerationContext } from "../context/context";

export function useGeneration() {
  const {
    state: { generation },
    actions: { setGeneration },
  } = useContext(GenerationContext);

  return [generation, setGeneration];
}
