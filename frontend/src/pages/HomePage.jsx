import { Container, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text fontSize="xl" textAlign={"center"} fontweght="bold" color="gray.500">
          <Link to={"/create"}>
            <Text as="span" cpçpr="blue.500" _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
