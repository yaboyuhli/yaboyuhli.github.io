// Import necessary hooks from React
import { useState, useEffect } from "react";

/**
 * useScrollPosition is a custom hook that returns the current scroll position
 * of the window (vertical position of the scroll bar).
 *
 * @returns {number} scrollPosition - The current scroll position in pixels.
 */
export const useScrollPosition = () => {
  // Initialize the scroll position state
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update the scroll position state when the window is scrolled
  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  // Attach the handleScroll function to the window scroll event
  // and clean up the event listener when the component is unmounted
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect only runs once

  return scrollPosition;
};
