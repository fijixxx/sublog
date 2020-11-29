import { GetStaticProps } from "next";
import ListContainer from "../components/ListContainer";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports";
import { listSublogs } from "../src/graphql/queries";
import ListCard from "../components/ListCard";
import { sublog } from "../interfaces/aricle";
import { Center, Box, Badge, Divider } from "@chakra-ui/react";
import About from "../components/About";

type Props = {
  articles: {
    data: {
      listSublogs: {
        items: sublog[];
      };
    };
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
        {[
          ...new Set(
            articles.data.listSublogs.items.map((item) => item.category)
          ),
        ].map((extracted, idx: number) => (
          <Badge borderRadius="full" px="2" colorScheme="teal" mr="2" key={idx}>
            {extracted}
          </Badge>
        ))}
      </Box>
    </Center>
    <ListContainer>
      {articles.data.listSublogs.items.map((item: sublog, idx: number) => (
        <ListCard data={item} key={idx}></ListCard>
      ))}
    </ListContainer>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const articles = await topQuery().catch((err: unknown) =>
    console.error("ERR: ", err)
  );

  return {
    props: { articles },
  };
};

//export const topQuery = async (): Promise<any> => {
export const topQuery = async () =>
  //: Promise<GraphQLResult<object> | Observable<object>>
  {
    Amplify.configure(awsconfig);

    return await API.graphql(graphqlOperation(listSublogs));
  };

export default IndexPage;
