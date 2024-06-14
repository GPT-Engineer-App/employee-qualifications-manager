import { Container, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">About Us</Text>
        <Text>Learn more about our mission and values.</Text>
      </VStack>
    </Container>
  );
};

export default About;