import React, { ReactNode } from "react";
import { Center, SimpleGrid, Container } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

const ListContainer = ({ children }: Props): JSX.Element => (
  <Center>
    <Container maxW="1080px" m="4">
      <SimpleGrid minChildWidth="318px" spacing="14px">
        {children}
      </SimpleGrid>
    </Container>
  </Center>
);

export default ListContainer;
