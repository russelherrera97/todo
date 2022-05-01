import Head from "next/head";
import Image from "next/image";
import {
  Flex,
  Stack,
  Box,
  Text,
  Button,
  ChakraProvider,
  Fade,
  useDisclosure,
  ScaleFade,
  Slide,
  SlideFade,
  Input,
  FormControl,
  FormLabel,
  Select,
  Spacer,
  SimpleGrid,
  extendTheme,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
export default function Home() {
  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)",
  };
  const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                color: "gray",
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "transparent",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 0,
                transformOrigin: "left top",
              },
            },
          },
        },
      },
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const TaskItem = () => {
    return (
      <Flex flexDir="column">
        <Box
          backgroundColor="red"
          w="100%"
          h="10vh"
          mb="3vh"
          px="5px"
          shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
          className="task-item"
          borderRadius="10px"
        >
          <Text>Task 1</Text>
        </Box>
      </Flex>
    );
  };

  const [inputList, setInputList] = useState([]);
  const onAddBtnClick = () => {
    setInputList(inputList.concat(<TaskItem key={inputList.length} />));
  };
  const removeInput = () => {
    setInputList(inputList.slice(0, 0));
  };
  return (
    <ChakraProvider theme={theme}>
      <Stack spacing="0px">
        <Stack>
          <Flex
            py="0px"
            px="10px"
            h="45px"
            boxShadow="lg"
            alignItems={{ base: "center", md: "flex-start" }}
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
              <Flex
                flexDir="column"
                lineHeight={{ base: "7vh", md: "5vh", lg: "8vh" }}
              >
                <Text
                  fontWeight="600"
                  fontSize={{ base: "1.5rem", md: "3rem" }}
                  color="#FFF"
                >
                  Create a New Task
                </Text>
                <FormControl variant="floating">
                  <Input
                    mb="5vh"
                    backgroundColor="#fff"
                    focusBorderColor="#a7b3a5"
                    placeholder=" "
                  />
                  <FormLabel>Task Title</FormLabel>
                </FormControl>
                <Textarea
                  backgroundColor="#fff"
                  placeholder="Task Description"
                  mb="5vh"
                  focusBorderColor="#a7b3a5"
                  width="auto"
                  h={{ base: "20vh", md: "40vh", lg: "50vh" }}
                />
                <Button
                  backgroundColor="#9099a2"
                  alignSelf="center"
                  w={{ base: "200px", md: "300px" }}
                  onClick={onAddBtnClick}
                >
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
                <Text
                  fontWeight="600"
                  fontSize={{ base: "1.5rem", md: "3rem" }}
                  color="#000"
                >
                  My Tasks
                </Text>
                <Flex mb="30px">
                  <Select
                    w={{ base: "130px", md: "180px" }}
                    placeholder="Filter Task"
                    shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
                  >
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed Tasks</option>
                    <option value="incomplete">Incomplete Tasks</option>
                  </Select>
                  <Spacer />
                  <Button
                    backgroundColor="#fff"
                    alignSelf="center"
                    w={{ base: "100px", md: "180px" }}
                    shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
                    onClick={removeInput}
                  >
                    Clear
                  </Button>
                </Flex>
                <Box
                  h={{ base: "40vh", md: "40vh", lg: "50vh" }}
                  backgroundColor="green"
                  px="30px"
                  py="30px"
                  overflow="auto"
                  borderRadius="10px"
                >
                  {inputList}
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}

function TaskItem() {
  return (
    <Flex flexDir="column">
      <Box
        backgroundColor="red"
        w="100%"
        h="10vh"
        mb="3vh"
        px="5px"
        shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
        className="task-item"
        borderRadius="10px"
      >
        <Text>Task 1</Text>
      </Box>
    </Flex>
  );
}
