import { sublog } from "../interfaces/aricle";
import { Center, Box, Badge, Divider, Container } from "@chakra-ui/react";
import About from "../components/About";
import Head from "next/head";

type Props = {
  data: {
    article: {
      Items: sublog[];
    };
    content: string;
  };
};

const Article = ({ data }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{data.article.Items[0].title} | sublog.yfijixxx</title>
        <meta
          property="og:title"
          content={data.article.Items[0].title + " | sublog.yfijixx"}
        />
        <meta property="og:description" content="素振りブログです" />
        <meta property="og:type" content="blog" />
        <meta
          property="og:url"
          content={
            "https://blog.yfijixxxrdp.com/article/" +
            data.article.Items[0].title +
            ".html"
          }
        />
        <meta property="og:image" content="/public/static/favicon.ico" />
        <meta property="og:site_name" content="sublog.yfijixxx" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content={
            "https://blog.yfijixxxrdp.com/article/" +
            data.article.Items[0].title +
            ".html"
          }
        />
        <meta
          name="twitter:title"
          content={data.article.Items[0].title + " | sublog.yfijixx"}
        />
        <meta name="twitter:description" content="素振りブログです" />
        <meta name="twitter:image" content="../public/favicon.ico" />
        <link
          rel="canonical"
          href={
            "https://blog.yfijixxxrdp.com/article/" +
            data.article.Items[0].title +
            ".html"
          }
        />
        <link
          rel="shortcut icon"
          href="../public/favicon.ico"
          key="shortcutIcon"
        />
      </Head>
      <About bgcolor={data.article.Items[0].eyeCatchURL}></About>
      <Divider />
      <Center>
        <Box
          bg={data.article.Items[0].eyeCatchURL}
          w="md"
          h="200px"
          mt="4"
          borderRadius="lg"
        />
      </Center>
      <Center>
        <Box d="flex" alignItems="baseline" mt="4">
          <Badge borderRadius="full" px="2">
            {data.article.Items[0].category}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {data.article.Items[0].createdAt.slice(0, 4)}年
            {data.article.Items[0].createdAt.slice(5, 7)}月
            {data.article.Items[0].createdAt.slice(8, 10)}日
          </Box>
        </Box>
      </Center>
      <Center>
        <Box mt="4" d="flex" alignItems="baseline">
          {data.article.Items[0].tag?.map((tag, idx: number) => (
            <Badge
              variant="outline"
              borderRadius="full"
              px="2"
              fontSize="xs"
              mr="2"
              key={idx}
            >
              {tag}
            </Badge>
          ))}
        </Box>
      </Center>
      <Center>
        <Box
          mt="4"
          fontWeight="semibold"
          as="h2"
          lineHeight="tight"
          isTruncated
        >
          {data.article.Items[0].title}
        </Box>
      </Center>
      <Center>
        <Container maxW="md">
          <Box m="4" dangerouslySetInnerHTML={{ __html: data.content }} />
        </Container>
      </Center>
    </>
  );
};

export default Article;
