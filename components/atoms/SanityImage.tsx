import Image, { ImageProps } from "next/legacy/image";
import { useNextSanityImage } from "next-sanity-image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { cms } from "../../lib/cms";

interface SanityImageProps extends Omit<ImageProps, "src" | "loader"> {
  image: SanityImageSource;
  alt: string;
}

export const SanityImage: React.FC<SanityImageProps> = ({
  image,
  alt,
  ...props
}) => {
  const imageProps = useNextSanityImage(cms, image, {
    enableBlurUp: true,
  });

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
        blurDataURL={imageProps.blurDataURL}
        placeholder={imageProps.placeholder}
        {...customProps}
      />
    );
  }

  return <Image {...imageProps} alt={alt} {...customProps} />;
};
