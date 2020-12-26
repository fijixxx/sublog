import { GetStaticProps } from "next";
import ListCard from "../components/ListCard";
import { sublog } from "../interfaces/aricle";
import { Center, Box, Badge, Divider, SimpleGrid } from "@chakra-ui/react";
import About from "../components/About";
import Head from "next/head";

type Props = {
  articles: {
    Items: sublog[];
  };
};

const IndexPage = ({ articles }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>sublog.yfijixxx</title>
        <meta property="og:title" content="sublog.yfijixxx" />
        <meta property="og:description" content="素振りブログです" />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://blog.yfijixxxrdp.com" />
        <meta property="og:image" content="public/favicon.ico" />
        <meta property="og:site_name" content="sublog.yfijixxx" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://blog.yfijixxxrdp.com" />
        <meta name="twitter:title" content="sublog.yfijixxx" />
        <meta name="twitter:description" content="素振りブログです" />
        <meta name="twitter:image" content="public/favicon.ico" />
        <link rel="canonical" href="https://blog.yfijixxxrdp.com" />
        <link
          rel="shortcut icon"
          href="public/favicon.ico"
          key="shortcutIcon"
        />
      </Head>
      <About bgcolor=""></About>
      <Divider />
      <Center mt="4">
        <Box>
          {[...new Set(articles.Items.map((item) => item.category))].map(
            (extracted, idx: number) => (
              <Badge borderRadius="full" px="2" mr="2" key={idx} fontSize="md">
                {extracted}
              </Badge>
            )
          )}
        </Box>
      </Center>
      <Center mt="4">
        <SimpleGrid columns={[1, null, 3]} spacing="4">
          {articles.Items.map((item: sublog, idx: number) => (
            <ListCard data={item} key={idx}></ListCard>
          ))}
        </SimpleGrid>
      </Center>
      <Box mb="4"></Box>
    </>
  );
};

/**
 * 記事の一覧データを取得
 */
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/articles");
  const res_serialized = await response.json();
  const articles = res_serialized.articles;

  return {
    props: { articles },
  };
};

export default IndexPage;
