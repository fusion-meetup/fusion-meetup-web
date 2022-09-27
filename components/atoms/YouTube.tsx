interface YouTubeProps {
  youTubeLink: string | undefined | null;
}

const YouTube: React.FC<YouTubeProps> = ({ youTubeLink }) => {
  if (!youTubeLink) return null;

  const youTubeLinkObject = new URL(youTubeLink);
  const youTubeID = youTubeLinkObject.searchParams.get("v");

  return (
    <div className="w-full max-w-[640px] xl:max-w-[800px] mx-auto">
      <div className="flex flex-col relative gap-8">
        <div className="relative overflow-hidden shadow rounded-xl height-64 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youTubeID}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default YouTube;
