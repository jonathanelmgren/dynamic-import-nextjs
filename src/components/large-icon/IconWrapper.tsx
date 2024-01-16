"use client";
import React, { useState, useEffect } from "react";

export const IconWrapper: React.FC<
  React.PropsWithChildren<{ viewBox?: string; iconName?: string }>
> = ({ viewBox, iconName, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <svg
      data-autoid="IconTextList:icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      data-icon={iconName}
      viewBox={viewBox}
      preserveAspectRatio="xMinYMin meet"
      style={{ opacity: loaded ? 1 : 0 }}
      {...props}
    >
      {props.children}
    </svg>
  );
};
