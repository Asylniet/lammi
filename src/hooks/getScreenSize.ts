import React from "react";

export const useGetScreenSize = () => {
  const [width, setWidth] = React.useState<number>();
  const [height, setHeight] = React.useState<number>();

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, height };
}