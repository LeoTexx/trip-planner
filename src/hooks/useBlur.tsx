import { useEffect, useRef } from "react";

export const useBlur = (handler: any) => {
  const domNode = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const functionHandler = (event: any) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", functionHandler);

    return () => {
      document.removeEventListener("mousedown", functionHandler);
    };
  });

  return domNode;
};
