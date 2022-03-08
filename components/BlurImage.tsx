import Image from "next/image";
import { useState, useEffect } from "react";

export default function BlurImage(props: any) {
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState(props.src);
  useEffect(() => setSrc(props.src), [props.src]);

  return (
    <Image
      {...props}
      src={src}
      alt={props.alt}
      className={`
        ${props.className}
        duration-400 ease-in-out 
        ${
          isLoading
            ? "grayscale blur-2xl scale-110 "
            : "grayscale-0 blur-0 scale-100"
        }
      `}
      onLoadingComplete={() => {
        setLoading(false);
      }}
      //   onError={async () => {

      //   }}
    />
  );
}
