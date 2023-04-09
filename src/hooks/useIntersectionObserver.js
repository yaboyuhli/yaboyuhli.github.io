import { useState, useEffect } from 'react';

/**
 * useIntersectionObserver is a custom hook that returns the intersection
 * state of a given element using the Intersection Observer API.
 *
 * @param {React.RefObject} elementRef - The reference to the element being observed.
 * @param {Object} options - The options for the Intersection Observer.
 * @param {number} options.threshold - The ratio at which the element is considered intersecting (default: 0).
 * @param {Element} options.root - The element that is used as the viewport for checking visibility (default: null, viewport).
 * @param {string} options.rootMargin - Margin around the root element (default: '0%').
 * @param {boolean} options.freezeOnceVisible - If true, stops observing the element once it's visible (default: false).
 * @returns {IntersectionObserverEntry} entry - The most recent entry for the observed element.
 */
function useIntersectionObserver(
  elementRef,
  { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }
) {
  const [entry, setEntry] = useState();

  // Determine if the observation should be frozen (not updated)
  const frozen = entry?.isIntersecting && freezeOnceVisible;

  // Update the entry state with the latest entry from the Intersection Observer
  const updateEntry = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    // Abort if Intersection Observer is not supported, the element is not available, or the observation is frozen
    if (!hasIOSupport || frozen || !node) return;

    // Create the Intersection Observer with the given options
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    // Start observing the element
    observer.observe(node);

    // Clean up when the component unmounts or the dependencies change
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}

export default useIntersectionObserver;
