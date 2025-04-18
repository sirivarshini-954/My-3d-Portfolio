"use client";

import useScreenSize from "./hooks/useScreenSize";
import React, { ReactNode, FC } from "react";

type ResponsiveComponentProps = {
  children: (props: { size: number }) => ReactNode;
};

const ResponsiveComponent: FC<ResponsiveComponentProps> = ({ children }) => {
  const size = useScreenSize()!;

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;