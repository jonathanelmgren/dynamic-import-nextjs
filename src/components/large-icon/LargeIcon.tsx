import dynamic from "next/dynamic";
import React from "react";

export const AVAILABLE_ICONS = ["bell", "camera", "city", "mixed"] as const;

export type AvailableIcons = (typeof AVAILABLE_ICONS)[number];

const LargeIcon: React.FC<{ name: AvailableIcons }> = ({ name }) => {
  const Icon = dynamic(() => import(`./icons/${name}`), { ssr: false });

  return <Icon />;
};

export default LargeIcon;
