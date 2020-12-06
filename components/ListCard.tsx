import Link from "next/link";
import { sublog } from "../interfaces/aricle";
import { Box, Image, Badge } from "@chakra-ui/react";

type Props = {
  data: sublog;
};

const ListCard = ({ data }: Props): JSX.Element => (
  <Link href={{ pathname: "/article/[data]" }} as={`/article/${data.id}`}>
    <a>
      <Box
        maxW="xs"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt="2"
      >
        <Box bg={data.eyeCatchURL} w="100%" h="200px" />

        <Box p="4">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {data.category}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              ml="2"
            >
              {data.createdAt.slice(0, 4)}年{data.createdAt.slice(5, 7)}月
              {data.createdAt.slice(8, 10)}日
            </Box>
          </Box>

          <Box mt="1" d="flex" alignItems="baseline">
            {data.tag?.map((tag, idx: number) => (
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

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {data.title}
          </Box>
        </Box>
      </Box>
    </a>
  </Link>
);

export default ListCard;
