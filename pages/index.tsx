import { GetStaticProps } from "next";
import ListContainer from "../components/ListContainer";
import ListCard from "../components/ListCard";
import { sublog } from "../interfaces/aricle";
import { Center, Box, Badge, Divider } from "@chakra-ui/react";
import About from "../components/About";
import AWS from "aws-sdk";

type Props = {
  articles: {
    Items: sublog[];
  };
};

const IndexPage = ({ articles }: Props): JSX.Element => (
  <>
    <About></About>
    <Divider />
    <Center mt="4">
      <Box fontWeight="semibold" as="h4" mr="2">
        カテゴリ
      </Box>
      <Box>
        {[...new Set(articles.Items.map((item) => item.category))].map(
          (extracted, idx: number) => (
            <Badge
              borderRadius="full"
              px="2"
              colorScheme="teal"
              mr="2"
              key={idx}
            >
              {extracted}
            </Badge>
          )
        )}
      </Box>
    </Center>
    <ListContainer>
      {articles.Items.map((item: sublog, idx: number) => (
        <ListCard data={item} key={idx}></ListCard>
      ))}
    </ListContainer>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  AWS.config.update({ region: "ap-northeast-1" });
  const DynamoDB = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: "sublog",
    IndexName: "media-createdAt-index",
    KeyConditionExpression: "media = :media",
    ExpressionAttributeValues: {
      ":media": "sublog",
    },
  };

  const articles = await DynamoDB.query(params).promise();

  return {
    props: { articles },
  };
};

export default IndexPage;
