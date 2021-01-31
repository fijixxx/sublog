import Head from "next/head";

type Props = {
  metaData: {
    path: string;
    title: string;
  };
};

const MetaHeader = ({ metaData }: Props): JSX.Element => {
  const hostingBasePath = process.env.NEXT_PUBLIC_HOSTING_BASE_URL || "";
  const cloudinaryBaseURL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL || "";
  return (
    <Head>
      <title>
        {metaData.title
          ? metaData.title + " | sublog.yfijixxx"
          : "sublog.yfijixxx"}
      </title>
      <meta
        property="og:title"
        content={
          metaData.title
            ? metaData.title + " | sublog.yfijixxx"
            : "sublog.yfijixxx"
        }
      />
      <meta property="og:description" content="素振りブログです" />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={hostingBasePath + metaData?.path} />
      <meta property="og:image" content={cloudinaryBaseURL + "favicon.ico"} />
      <meta property="og:site_name" content="sublog.yfijixxx" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={hostingBasePath + metaData?.path} />
      <meta
        name="twitter:title"
        content={
          metaData.title
            ? metaData.title + " | sublog.yfijixxx"
            : "sublog.yfijixxx"
        }
      />
      <meta name="twitter:description" content="素振りブログです" />
      <meta name="twitter:image" content={cloudinaryBaseURL + "favicon.ico"} />
      <link rel="canonical" href={hostingBasePath + metaData?.path} />
      <link
        rel="shortcut icon"
        href={cloudinaryBaseURL + "favicon.ico"}
        key="shortcutIcon"
      />
    </Head>
  );
};

export default MetaHeader;
