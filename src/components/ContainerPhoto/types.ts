import { CSSProperties } from "react";

export type ContainerPhotoProps = {
  url: string;
  sx?: CSSProperties;
  title?: string;
  text?: string;
  children?: JSX.Element | JSX.Element[];
};
