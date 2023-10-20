import { Cart, Details } from "@/components";
import { Container, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Cart />
        <Details />
      </Flex>
    </Container>
  );
}
