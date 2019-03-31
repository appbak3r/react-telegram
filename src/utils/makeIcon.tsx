import React from "react";

export type IconProps = {
  className?: string;
};

export const makeIcon = (iconId: string, className?: string) => {
  return (
    <svg className={className} focusable="false">
      <use xlinkHref={`#${iconId}`} />
    </svg>
  );
};
