import { useEffect, useState } from "react";

export function useLocalStorage(key, inialValue) {
  const [state, setState] = useState(function () {
    const data = localStorage.getItem(key);

    if (!data) {
      localStorage.setItem(key, JSON.stringify(inialValue));
      return inialValue;
    }

    return JSON.parse(data);
  });

  useEffect(
    function () {
      if (!state) return;
      localStorage.setItem(key, JSON.stringify(state));
    },
    [key, state]
  );

  return [state, setState];
}
