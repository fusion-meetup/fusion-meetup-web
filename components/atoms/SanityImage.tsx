import Image, { ImageProps } from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { cms } from "../../lib/cms";

interface SanityImageProps extends Omit<ImageProps, "src" | "loader"> {
  image: SanityImageSource;
  alt: string;
}

export const SanityImage: React.FC<SanityImageProps> = ({ image, alt, ...props }) => {
  const imageProps = useNextSanityImage(cms, image, { enableBlurUp: true });
  return <Image src={imageProps.src} loader={imageProps.loader} alt={alt} {...props} />;
};
