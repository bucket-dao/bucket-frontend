import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  noPadding?: boolean;
  className?: string;
};
const FrostCard = ({ children, noPadding, className }: Props) => {
  return (
    <div
      className={`${noPadding ? "p-0" : "p-5"} ${
        className && className
      } shadow-lg bg-white rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-lg`}
    >
      {children}
    </div>
  );
};

export default FrostCard;
