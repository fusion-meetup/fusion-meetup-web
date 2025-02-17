"use client";

import { useNextSanityImage } from "next-sanity-image";
import Image, { ImageProps } from "next/legacy/image";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@fusion/sanity/client";

interface SanityImageProps extends Omit<ImageProps, "src" | "loader"> {
  image: SanityImageSource;
  alt: string;
}

export const SanityImage: React.FC<SanityImageProps> = ({
  image,
  alt,
  ...props
}) => {
  const imageProps = useNextSanityImage(client, image);

  const customProps = {
    quality: 80,
    ...props,
  };

  if (props.layout === "fill") {
    return (
      <Image
        src={imageProps.src}
        loader={imageProps.loader}
        alt={alt}
        {...customProps}
      />
    );
  }

  return <Image {...imageProps} alt={alt} {...customProps} />;
};
