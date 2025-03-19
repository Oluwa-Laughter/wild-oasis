import { useEffect, useRef } from "react";

function useOutsideClick(handler, capture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, capture);

      return () => document.removeEventListener("click", handleClick, capture);
    },
    [handler, capture]
  );

  return ref;
}

export default useOutsideClick;
