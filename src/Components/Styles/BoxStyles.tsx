import React from "react";
import "./BoxStyles.scss";

type BoxProps = {
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
};

export const BoxStyle: React.FC<BoxProps> = ({
  bgColor,
  className,
  children,
}) => {
  return (
    <div
      className={`BoxStyle ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};
