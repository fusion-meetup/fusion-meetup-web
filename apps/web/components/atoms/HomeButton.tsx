import Link from "next/link";

export const HomeButton = () => {
  return (
    <Link
      href="/"
      className="group grid h-12 w-12 grid-rows-3 outline-offset-4 focus:outline-blue"
      aria-label="Home"
    >
      <div className="bg-blue-500 transition-colors delay-100 group-hover:bg-blue-700"></div>
      <div className="delay-50 bg-pink-500 transition-colors group-hover:bg-pink-700"></div>
      <div className="bg-yellow-500 transition-colors group-hover:bg-yellow-600"></div>
    </Link>
  );
};
