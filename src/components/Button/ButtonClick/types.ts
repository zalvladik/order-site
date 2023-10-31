import { CSSProperties } from "react";

export type ButtonStyledProps = {
  bgcolor?: string;
};

export type ButtonProps = {
  hrefid?: string;
  bgcolor?: string;
  sx?: CSSProperties;
  children: string;
};
