import Link from "next/link";

export const HomeButton = () => {
  return (
    <Link href="/" passHref>
      <a className="group grid grid-rows-3 w-12 h-12" aria-label="Home">
        <div className="bg-blue-500 group-hover:bg-blue-700 transition-colors delay-100"></div>
        <div className="bg-pink-500 group-hover:bg-pink-700 transition-colors delay-50"></div>
        <div className="bg-yellow-500 group-hover:bg-yellow-600 transition-colors"></div>
      </a>
    </Link>
  );
};
