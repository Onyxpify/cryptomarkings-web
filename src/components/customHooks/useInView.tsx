import { useEffect, useRef, useState, RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

const useInView = <T extends HTMLElement>(
  options: UseInViewOptions = {}
): {
  ref: RefObject<T | null>;
  inView: boolean;
} => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const { once = false, ...observerOptions } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.1, ...observerOptions }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref.current]);

  return { ref, inView };
};

export default useInView;
