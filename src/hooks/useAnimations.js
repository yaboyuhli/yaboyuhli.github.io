import { useRef } from "react";
import { useSpring, useTrail, config } from "react-spring";
import useIntersectionObserver from './useIntersectionObserver';

export const useAnimations = (itemsCount = 0) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: false });
  

  const appear = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 },
  });

  const fadeIn = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
    config: { duration: 1000 },
  });

  const comeLeft = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
    transform: dataRef?.isIntersecting ? "translateX(0)" : "translateX(-300%)",
    config: { duration: 500 },
  });

  const comeRight = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
    transform: dataRef?.isIntersecting ? "translateX(0)" : "translateX(300%)",
    config: { duration: 500 },
  });

  const comeLeftSkills = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
    transform: dataRef?.isIntersecting ? "translateX(0)" : "translateX(-300%)",
    delay: 800,
    config: { duration: 700 },
  });

  const comeRightSkills = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
    transform: dataRef?.isIntersecting ? "translateX(0)" : "translateX(300%)",
    delay: 800,
    config: { duration: 700 },
  });


  const rotate = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
    transform: dataRef?.isIntersecting ? "rotate(0deg)" : "rotate(180deg)",
    config: { duration: 500 },
  });

  const bounce = useSpring({
    to: [
      { transform: "translateY(0px)" },
      { transform: "translateY(-25px)" },
      { transform: "translateY(0px)" },
    ],
    config: { duration: 350 },
  });

  const fadeInTrail = useTrail(itemsCount, {
    opacity: dataRef?.isIntersecting ? 1 : 0,
    x: dataRef?.isIntersecting ? 0 : 1,
    from: { opacity: 0 },
    delay: 800,
    config: { duration: 1000 },
  });

  const fadeInTrailContact = useTrail(3, {
    opacity: dataRef?.isIntersecting ? 1 : 0,
    x: dataRef?.isIntersecting ? 0 : 1,
    from: { opacity: 0 },
    delay: 800,
    config: { duration: 2000 },
  });

  const fadeInIcons = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
    x: dataRef?.isIntersecting ? 0 : 1,
    from: { opacity: 0 },
    delay: 1300,
    config: { duration: 1000 },
  });

  const fadeInTitle = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
    x: dataRef?.isIntersecting ? 0 : 1,
    from: { opacity: 0 },
    delay: 800,
    config: { duration: 500 },
  });

  return {
    triggerRef,
    appear,
    fadeIn,
    comeLeft,
    comeRight, 
    comeLeftSkills,
    comeRightSkills,
    rotate,
    bounce,
    fadeInTrail,
    fadeInTrailContact,
    fadeInIcons,
    fadeInTitle,
    
    
  };
};

export default useAnimations;
