import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

const Document: React.FC<DocumentProps> = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-200 dark:bg-slate-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
