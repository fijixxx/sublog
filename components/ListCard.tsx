import Link from "next/link";
import { Sublog } from "../src/generated/graphql";
import { Box, Badge, Wrap, WrapItem } from "@chakra-ui/react";

type Props = {
  cardData: Sublog;
};

const ListCard = ({ cardData }: Props): JSX.Element => (
  <Link href={{ pathname: "/article/[data]" }} as={`/article/${cardData.id}`}>
    <a>
      <Box
        maxW="xs"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt="2"
      >
        <Box bg={cardData.eyeCatchURL || ""} w="100%" h="200px" />

        <Box p="4">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2">
              {cardData.category}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              ml="2"
            >
              {cardData.createdAt?.slice(0, 4)}年
              {cardData.createdAt?.slice(5, 7)}月
              {cardData.createdAt?.slice(8, 10)}日
            </Box>
          </Box>

          <Box mt="1" d="flex" alignItems="baseline">
            <Wrap>
              {cardData.tag?.map((tag, idx: number) => (
                <WrapItem key={idx}>
                  <Badge
                    variant="outline"
                    borderRadius="full"
                    px="2"
                    fontSize="xs"
                    key={idx}
                  >
                    {tag}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4">
            {cardData.title}
          </Box>
        </Box>
      </Box>
    </a>
  </Link>
);

export default ListCard;
