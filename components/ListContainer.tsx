import React, { ReactNode } from "react";
import { Center, Grid } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

const ListContainer = ({ children }: Props): JSX.Element => (
  <Center>
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {children}
    </Grid>
  </Center>
);

export default ListContainer;
