import React from "react";

export const useRevealStroke = (rootId: string, masks: string[], baseDuration: number = 1) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  
  React.useEffect(() => {
    const root = document.querySelector(rootId) as HTMLElement
    if (!root) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 1,
      }
      );
      
      observer.observe(root);
      
    masks.forEach((mask, index, el) => {
      const id = `#mask-${mask}`
      const path = root.querySelector(id) as SVGPathElement
      if (!path) return

      const length = path?.getTotalLength();
      const multiplier = Math.max(1, Math.floor(length / 100));
      path?.setAttribute("style", `stroke-dasharray: ${length}; stroke-dashoffset: ${length}; animation-duration: ${baseDuration * multiplier}s;`);
    });
  }, [baseDuration, masks, rootId]);
  
  React.useEffect(() => {
    if(!isIntersecting) return
    
    const root = document.querySelector(rootId) as HTMLElement
    if (!root) return
    
    masks.forEach((mask, index, el) => {
      const id = `#mask-${mask}`
      const path = root.querySelector(id) as SVGPathElement
      if (!path) return
      
      setTimeout(() => {
        path.classList.add('stroke-reveal');
      }, baseDuration * 600 * index);
    });
  }, [rootId, masks, isIntersecting, baseDuration]);
}