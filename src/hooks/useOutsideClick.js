import { useEffect, useRef } from "react";

function useOutsideClick(close, capture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", handleClick, capture);

      return () => document.removeEventListener("click", handleClick, capture);
    },
    [close, capture]
  );

  return ref;
}

export default useOutsideClick;
