import Head from "next/head";
import Image from "next/image";
import {
  Flex,
  Stack,
  Box,
  Text,
  Button,
  ChakraProvider,
  Input,
  Select,
  Spacer,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
      <Stack spacing="0px">
        <Stack>
          <Flex
            py="0px"
            px="10px"
            h="45px"
            boxShadow="lg"
            alignItems="flex-start"
            backgroundColor="#6D7993"
          >
            <Text fontWeight="600" color="#fff" fontSize="2rem">
              To-do App
            </Text>
          </Flex>
        </Stack>

        <Stack h="100%" w="100%">
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box
              backgroundColor="#D5D5D5"
              py="40px"
              px="40px"
              h={{ base: "55vh", md: "100vh" }}
            >
              <Flex flexDir="column" lineHeight="10vh">
                <Text fontWeight="600" fontSize="3rem" color="#FFF">
                  Create a New Task
                </Text>
                <Input
                  mb="5vh"
                  width="auto"
                  backgroundColor="#fff"
                  focusBorderColor="#a7b3a5"
                  placeholder="Task Title"
                />
                <Textarea
                  backgroundColor="#fff"
                  placeholder="Task Description"
                  mb="5vh"
                  focusBorderColor="#a7b3a5"
                  width="auto"
                  h={{ base: "20vh", md: "40vh", lg: "50vh" }}
                />
                <Button backgroundColor="#9099a2" alignSelf="center" w="300px">
                  Create
                </Button>
              </Flex>
            </Box>
            <Box
              backgroundColor="#fff"
              py="40px"
              px="40px"
              h={{ base: "55vh", md: "100vh" }}
            >
              {" "}
              <Flex flexDir="column" lineHeight="8vh">
                <Text fontWeight="600" fontSize="3rem" color="#000">
                  My Tasks
                </Text>
                <Flex mb="30px">
                  <Select w="180px" placeholder="Filter Tasks">
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed Tasks</option>
                    <option value="incomplete">Incomplete Tasks</option>
                  </Select>
                  <Spacer />
                  <Button
                    backgroundColor="#9099a2"
                    alignSelf="center"
                    w="180px"
                  >
                    Clear
                  </Button>
                </Flex>
                <Box
                  minH="50vh"
                  maxH="50vh"
                  backgroundColor="green"
                  px="30px"
                  overflow="auto"
                  borderRadius="10px"
                >
                  <Flex flexDir="column">{/* TODO: Insert Tasks Here */}</Flex>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}
