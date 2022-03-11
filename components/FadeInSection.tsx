import { useEffect, useRef, useState } from "react";

const FadeInSection = (props: any) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<any>();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const domCurrentRef = domRef.current;
    observer.observe(domCurrentRef);
    return () => observer.unobserve(domCurrentRef);
  }, []);
  const getFadeInDirection = (dir: string) => {
    if (dir === "bottom") return "fade-in-section-bottom";
    if (dir === "top") return "fade-in-section-top";
    if (dir === "left") return "fade-in-section-left";
    if (dir === "right") return "fade-in-section-right";
  };
  return (
    <div
      className={`${getFadeInDirection(props.direction)} ${
        isVisible ? "is-visible" : ""
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
