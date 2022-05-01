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
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [inputList, setInputList] = useState([]);
  const [textAreaCount, ChangeTextAreaCount] = useState(0);
  const [description, setDescription] = useState(0);
  function handle() {
    console.log(value);
  }
  const charCount = (e) => {
    setDescription(e.target.value.length);
    setValue2(e.target.value);
  };
  const onAddBtnClick = () => {
    setInputList(inputList.concat(<TaskItem key={inputList.length} />));
  };
  const removeInput = () => {
    setInputList(inputList.slice(0, 0));
  };

  const titleCount = (e) => {
    ChangeTextAreaCount(e.target.value.length);
    setValue(e.target.value);
  };
  const TaskItem = () => {
    return (
      <Flex flexDir="column">
        <Box
          backgroundColor="red"
          w="100%"
          h="10vh"
          mb="3vh"
          py="10px"
          px="30px"
          shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
          className="task-item"
          borderRadius="10px"
        >
          <Flex flexDir={"column"} lineHeight="30px">
            <Text fontSize="1.5rem" fontWeight={"600"}>
              {" "}
              {value.toString()}
            </Text>
            <Text> {value2.toString()}</Text>
          </Flex>
        </Box>
      </Flex>
    );
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
              h={{ base: "100%", md: "100vh" }}
            >
              <Flex flexDir="column" rowGap={{ base: 0, lg: "20px" }}>
                <Text
                  fontWeight="600"
                  fontSize={{ base: "2rem", lg: "3rem" }}
                  color="#FFF"
                >
                  Create New Task
                </Text>
                <Text alignSelf="self-end" mb={"auto"}>
                  {textAreaCount}/25
                </Text>
                <FormControl variant="floating">
                  <Input
                    mb="5vh"
                    backgroundColor="#fff"
                    focusBorderColor="#a7b3a5"
                    placeholder="Task Name"
                    onChange={titleCount}
                    maxLength="25"
                  />
                </FormControl>
                <Text alignSelf="self-end" mb={"auto"}>
                  {description}/75
                </Text>
                <Textarea
                  backgroundColor="#fff"
                  placeholder="Task Description"
                  mb="5vh"
                  maxLength={75}
                  focusBorderColor="#a7b3a5"
                  width="auto"
                  h={{ base: "20vh", md: "30vh", lg: "30vh" }}
                  onChange={charCount}
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
              h={{ base: "100%", md: "100vh" }}
            >
              {" "}
              <Flex
                flexDir="column"
                rowGap={{ base: 0, sm: "20px", lg: "70px" }}
              >
                <Text
                  fontWeight="600"
                  fontSize={{ base: "2rem", lg: "3rem" }}
                  color="#000"
                >
                  My Tasks
                </Text>
                <Flex mb={{ base: "6vh", lg: "4vh" }}>
                  <Select
                    w={{ base: "130px", md: "180px" }}
                    placeholder="Filter Task"
                    shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
                    mr="20px"
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
                  h={{ base: "40vh", md: "30vh", lg: "30vh" }}
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
