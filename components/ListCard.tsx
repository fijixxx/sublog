import Link from "next/link";
import { Sublog } from "../src/generated/graphql";
import { Box, Badge, Heading, Text } from "@chakra-ui/react";

type Props = {
  cardData: Sublog;
};

const ListCard = ({ cardData }: Props): JSX.Element => (
  <Box maxW="4xl" borderWidth="0" borderRadius="lg" mt="2">
    <Box p="4">
      <Text color="gray.500" fontSize="xs" m="0" p="0">
        {cardData.createdAt?.slice(0, 10)}
      </Text>
      <Link
        href={{ pathname: "/article/[data]" }}
        as={`/article/${cardData.id}`}
      >
        <a>
          <Heading as="h2" size="lg" mt="2" color="black">
            {cardData.title}
          </Heading>
        </a>
      </Link>
      <Box>
        <Box d="flex" alignItems="baseline" mt="0" mb="0">
          <Link href="[category]" as={cardData.category || ""}>
            <a>
              <Badge
                borderRadius="md"
                px="2"
                fontSize="sm"
                fontWeight="regular"
              >
                {cardData.category}
              </Badge>
            </a>
          </Link>
          <Text mr="2" />
          {cardData.tag?.map((tag, idx: number) => (
            <Text key={idx} color="gray.500" mr="2">
              {tag}
              {idx + 1 == cardData.tag?.length ? "" : ","}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
    <Box bg={cardData.eyeCatchURL || ""} w="100%" h="4px" mt="-4px" />
  </Box>
);

export default ListCard;
