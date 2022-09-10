import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { cms } from "../../lib/cms";

interface EventCardSpeakerImageProps {
  image: SanityImageSource;
  alt: string;
}

export const EventCardSpeakerImage: React.FC<EventCardSpeakerImageProps> = ({
  image,
  alt,
}) => {
  const imageProps = useNextSanityImage(cms, image, { enableBlurUp: true });

  return (
    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
      <Image
        src={imageProps.src}
        loader={imageProps.loader}
        layout="fill"
        objectFit="cover"
        alt={alt}
      />
    </div>
  );
};
