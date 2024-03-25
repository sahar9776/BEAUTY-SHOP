import { createContext, useRef } from "react";

export const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  // perfume categories 
  const womensRef=useRef(null);
  const mensRef=useRef(null);
  // skin-care categories
  const tonerRef=useRef(null);
  const essenseRef=useRef(null);
  const creamRef=useRef(null);
  const liftingCreamRef=useRef(null);
  const lipBalmRef=useRef(null);
  // hair-skin categories 
  const shampooRef=useRef(null);
  const hairMaskRef=useRef(null);
  // cosmetic categories 
  const concealerRef=useRef(null);
  const sunCreamRef=useRef(null);
  const eyeLinearRef=useRef(null);
  const mascaraRef=useRef(null);
  const eyeShadowRef=useRef(null);
  const lipStickRef=useRef(null);
  const rougeRef=useRef(null);


  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ScrollContext.Provider value={{ handleScroll , mensRef , womensRef , tonerRef , essenseRef , creamRef , liftingCreamRef , lipBalmRef ,shampooRef,hairMaskRef,
    concealerRef,sunCreamRef,eyeLinearRef,mascaraRef,eyeShadowRef,lipStickRef,rougeRef
    }}>
      {children}
    </ScrollContext.Provider>
  );
};
export default ScrollProvider;
