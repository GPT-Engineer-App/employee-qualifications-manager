import React from "react";
import { Container, Text, VStack } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Dashboard</Text>
        <Text>Welcome to your dashboard!</Text>
      </VStack>
    </Container>
  );
};

export default Dashboard;