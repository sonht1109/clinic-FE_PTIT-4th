/**
 *
 * LazyLoad
 * make by phamthainb
 */
 import theme from "styles/theme";
 import React, { ComponentType, lazy, Suspense } from "react";
 import styled, { keyframes } from "styled-components";
 
 const animation = keyframes`{
    0 {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, 0);
    }
  }`;
 
 const SRendering = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
   top: 0;
   left: 0;
   position: fixed;
   user-select: none;
 
   .line {
     display: inline-block;
     width: 15px;
     height: 15px;
     border-radius: 15px;
     margin: 0 5px;
     background-color: ${theme.color.green};
   }
 
   .load-3 .line:nth-last-child(1) {
     animation: ${animation} 0.6s 0.1s linear infinite;
   }
   .load-3 .line:nth-last-child(2) {
     animation: ${animation} 0.6s 0.2s linear infinite;
   }
   .load-3 .line:nth-last-child(3) {
     animation: ${animation} 0.6s 0.3s linear infinite;
   }
 `;
 
 const Rendering = () => {
   return (
     <SRendering>
       <div className="load-3">
         <div className="line"></div>
         <div className="line"></div>
         <div className="line"></div>
       </div>
     </SRendering>
   );
 };
 
 const loadable = (
   importFunc: () => Promise<{ default: ComponentType<any> }>,
   { fallback = null } = { fallback: <Rendering /> }
 ) => {
   const LazyComponent = lazy(importFunc);
 
   return (props: any) => (
     <Suspense fallback={fallback}>
       <LazyComponent {...props} />
     </Suspense>
   );
 };
 
 export default loadable;
 