import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const Delay = () => {
  const [value, setValue] = useState<string>("");
  const debounced = useDebouncedCallback((value) => {
    setValue(value);
  }, 500);
  return { value, debounced };
};
