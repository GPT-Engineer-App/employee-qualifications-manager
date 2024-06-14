import { Container, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Contact Us</Text>
        <Text>Get in touch with our team for any inquiries.</Text>
      </VStack>
    </Container>
  );
};

export default Contact;