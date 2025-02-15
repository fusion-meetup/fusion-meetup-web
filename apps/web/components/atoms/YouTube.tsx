interface YouTubeProps {
  youTubeLink: string | undefined | null;
}

export const YouTubeVideo: React.FC<YouTubeProps> = ({ youTubeLink }) => {
  if (!youTubeLink) return null;

  const youTubeLinkObject = new URL(youTubeLink);
  const youTubeID = youTubeLinkObject.searchParams.get("v");

  return (
    <div className="height-64 relative overflow-hidden rounded-xl pb-[56.25%] shadow">
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src={`https://www.youtube.com/embed/${youTubeID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
