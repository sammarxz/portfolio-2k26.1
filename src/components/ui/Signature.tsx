import { Penflow } from "penflow/react";
import { useState, useEffect, useRef } from "react";

export default function Signature() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex justify-center items-center">
      {isVisible ? (
        <Penflow
          text="Sam Marxz"
          fontUrl="/fonts/BrittanySignature.ttf"
          color="#fff"
          size={42}
          lineHeight={1.8}
        />
      ) : (
        <div className="h-full w-full" />
      )}
    </div>
  );
}
