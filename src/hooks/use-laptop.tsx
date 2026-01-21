import * as React from "react";

const Laptop_BREAKPOINT = 1024;

export function useIsLaptop() {
  const [isLaptop, setIsLaptop] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${Laptop_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsLaptop(window.innerWidth < Laptop_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsLaptop(window.innerWidth < Laptop_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isLaptop;
}
