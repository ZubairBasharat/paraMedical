import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";

interface LazyLoadOnViewProps {
  children: React.ReactNode;
  rootMargin?: string;
}

/**
 * Lazily renders children when they come into view.
 * Perfect for image-heavy or section-based pages to optimize performance.
 */
const LazyLoadOnView: React.FC<LazyLoadOnViewProps> = ({
  children,
  rootMargin = "222px",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
    rootMargin,
  });

  return (
    <div ref={ref}>
      {inView ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
};

export default LazyLoadOnView;
