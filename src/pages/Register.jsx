import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Input, VStack, Text } from "@chakra-ui/react";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/register", data);
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize="2xl">Register</Text>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" {...register("email")} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" {...register("password")} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.confirmPassword}>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">Register</Button>
      </VStack>
    </Container>
  );
};

export default Register;