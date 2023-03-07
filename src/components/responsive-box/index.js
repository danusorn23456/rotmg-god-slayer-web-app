import React, { useCallback } from 'react';

export function ResponsiveBox({ children, onSizeChange,...rest }) {
  
  const boxRef = useCallback((node)=>{
    if(node){
      const { width, height } = node.getBoundingClientRect();

      function handleResize() {
        const { width, height } = node.getBoundingClientRect();
        onSizeChange({ width, height });
      }

      onSizeChange({ width, height });

      window.addEventListener("resize", handleResize); 
    }
  },[onSizeChange])

  return (
    <div ref={boxRef} style={{ width: "100%", height: "100%" }} {...rest}>
      {children}
    </div>
  );
}