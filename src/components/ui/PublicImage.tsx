"use client";

import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: string;
  width?: number;
  height?: number;
};

export default function PublicImage({
  fill,
  src,
  width = 160,
  height = 64,
  ...props
}: Props) {
  if (fill) {
    return <Image fill src={src} {...props} />;
  }

  return <Image width={width} height={height} src={src} {...props} />;
}
