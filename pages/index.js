import Head from "next/head";
import Image from "next/image";
import {
  Flex,
  Stack,
  Box,
  Text,
  Button,
  ChakraProvider,
  useToast,
  extendTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormLabel,
  ModalCloseButton,
  CloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormControl,
  Select,
  useDisclosure,
  Spacer,
  SimpleGrid,
  Textarea,
  useUpdateEffect,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import { useState, useRef, setState } from "react";
import { prepareServerlessUrl } from "next/dist/server/base-server";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const notify = () => toast("Wow so easy !");

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [indexToUpdate, setIndex] = useState(0);
  const [strike, setStrike] = useState(false);
  const [green, setGreen] = useState(false);
  const [inputList, setInputList] = useState([]);
  const [textAreaCount, ChangeTextAreaCount] = useState(0);
  const [description, setDescription] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const charCount = (e) => {
    setDescription(e.target.value.length);
    setValue2(e.target.value);
  };
  const titleCount = (e) => {
    ChangeTextAreaCount(e.target.value.length);
    setValue(e.target.value);
  };

  function created() {
    return (
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    );
  }

  const onAddBtnClick = () => {
    setInputList([...inputList, { title: value, description: value2 }]);
    document.getElementById("task-title").value = "";
    document.getElementById("task-description").value = "";
    ChangeTextAreaCount(0);
    setDescription(0);
    toast("Task Created");

    setValue2("");
    setValue("");
  };
  const removeInput = () => {
    setInputList(inputList.slice(0, 0));
  };

  // function completeItem(index) {
  //   const title = inputList[index].title.toString();
  //   setStrike(!strike);
  // }
  const toggleSelected = (index) => {
    const selected = document.getElementById("title" + index);
    const selected2 = document.getElementById("description" + index);
    if (selected.style.textDecoration === "line-through") {
      selected.style.textDecoration = "none";
      selected2.style.textDecoration = "none";
    } else {
      selected.style.textDecoration = "line-through";
      selected2.style.textDecoration = "line-through";
    }
  };
  function deleteItem(todoIndex) {
    const newTaskList = inputList.filter((_, index) => index !== todoIndex);
    setInputList(newTaskList);
  }
  function openModal(index) {
    onOpen();
    setIndex(inputList.findIndex((_, i) => i === index));
    console.log("open " + indexToUpdate);
  }
  function editItem() {
    setValue("");
    setValue2("");
    onClose();
    console.log("close" + indexToUpdate);

    if (value === "") {
      inputList[indexToUpdate].title == inputList[indexToUpdate].title;
    } else {
      inputList[indexToUpdate].title = value;
    }
    if (value2 === "") {
      inputList[indexToUpdate].description =
        inputList[indexToUpdate].description;
    } else {
      inputList[indexToUpdate].description = value2;
    }
    console.log(inputList[indexToUpdate].title);
  }
  return (
    <ChakraProvider>
      <Stack spacing="0px">
        <Box
          background={`url(https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`}
          backgroundColor="gray"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Stack>
            <Flex
              py="0px"
              px="10px"
              h="45px"
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Text fontWeight="600" color="#fff" fontSize="2rem">
                To-do App
              </Text>
            </Flex>
          </Stack>

          <Stack h="100%" w="100%">
            <SimpleGrid columns={{ base: 1, md: 2 }}>
              <Box py="40px" px="40px" h={{ base: "100%", md: "100vh" }}>
                <Flex flexDir="column" rowGap={{ base: 0, lg: "20px" }}>
                  <Text
                    fontWeight="600"
                    fontSize={{ base: "2rem", lg: "3rem" }}
                    color="#FFF"
                  >
                    Create New Task
                  </Text>

                  <FormControl variant="floating" isRequired>
                    <Text mb={"auto"} fontSize="12" textAlign="right">
                      {textAreaCount.toString()}/25
                    </Text>
                    <Input
                      mb="5vh"
                      backgroundColor="#fff"
                      focusBorderColor="#a7b3a5"
                      placeholder="Task Title"
                      id="task-title"
                      onChange={titleCount}
                      maxLength="25"
                    />
                  </FormControl>
                  <FormControl variant="floating">
                    <Text fontSize="12" mb={"auto"} textAlign="right">
                      {description}/25
                    </Text>
                    <Textarea
                      backgroundColor="#fff"
                      placeholder="Task Description"
                      mb="5vh"
                      id="task-description"
                      maxLength={25}
                      focusBorderColor="#a7b3a5"
                      h={{ base: "5vh", md: "30vh", lg: "30vh" }}
                      onChange={charCount}
                    />
                  </FormControl>
                  <Button
                    backgroundColor="#e8e6e4"
                    alignSelf="center"
                    w={{ base: "200px", md: "300px" }}
                    onClick={onAddBtnClick}
                  >
                    Create
                  </Button>
                </Flex>
              </Box>
              <Box py="40px" px="40px" h={{ base: "100%", md: "100vh" }}>
                {" "}
                <Flex
                  flexDir="column"
                  rowGap={{ base: 0, sm: "20px", lg: "40px" }}
                >
                  <Text
                    fontWeight="600"
                    fontSize={{ base: "2rem", lg: "3rem" }}
                    color="#fff"
                  >
                    My Tasks
                  </Text>
                  <Flex mb={{ base: "6vh", lg: "4vh" }}>
                    {/* <Select
                      w={{ base: "130px", md: "180px" }}
                      placeholder="Filter Task"
                      shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
                      mr="20px"
                    >
                      <option value="all">All Tasks</option>
                      <option value="completed">Completed Tasks</option>
                      <option value="incomplete">Incomplete Tasks</option>
                    </Select> */}
                    <Spacer />
                    <Button
                      backgroundColor="#e8e6e4"
                      alignSelf="center"
                      w={{ base: "100px", md: "180px" }}
                      shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
                      onClick={removeInput}
                    >
                      Clear
                    </Button>
                  </Flex>
                  <Box
                    h={{ base: "40vh", md: "30vh", lg: "50vh" }}
                    px="30px"
                    py="30px"
                    overflow="auto"
                    borderRadius="10px"
                  >
                    <Flex flexDir="column" id="taskItem">
                      {inputList.map((item, index) => {
                        return (
                          <Box
                            w={{ base: "100%", sm: "100%" }}
                            h={{ base: "15vh", md: "15vh" }}
                            mb="3vh"
                            py="5px"
                            px={{ base: "10px", sm: "30px" }}
                            shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
                            className="task-item"
                            overflow="auto"
                            borderRadius="10px"
                            key={index}
                          >
                            {/* MODAL START */}
                            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Edit Task</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                  <FormControl>
                                    <FormLabel>Edit Title</FormLabel>
                                    <Input
                                      placeholder="Edit Title"
                                      maxLength={25}
                                      onChange={(e) => setValue(e.target.value)}
                                    />
                                  </FormControl>

                                  <FormControl mt={4}>
                                    <FormLabel>Edit Description</FormLabel>
                                    <Input
                                      maxLength={25}
                                      placeholder="Edit Description"
                                      onChange={(e) =>
                                        setValue2(e.target.value)
                                      }
                                    />
                                  </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                  <Button
                                    onClick={() => editItem(index)}
                                    colorScheme="blue"
                                    mr={3}
                                  >
                                    Save
                                  </Button>
                                  <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                            {/* MODAL END */}
                            <Box
                              borderLeft={{
                                base: "2px solid #cfd9ce",
                                sm: "4px solid #cfd9ce",
                              }}
                              borderLeftRadius="2px"
                              pl="10px"
                              h="100%"
                            >
                              {" "}
                              <Flex>
                                <Text
                                  fontSize={{ base: "1rem", sm: "2rem" }}
                                  fontWeight={"600"}
                                  style={{
                                    textDecoration: strike
                                      ? "line-through"
                                      : "none",
                                  }}
                                  id={"title" + index}
                                  color="white"
                                  value={item.title}
                                >
                                  {item.title}
                                </Text>
                                <Spacer />

                                <Button
                                  mr="-20px"
                                  iconSpacing={0}
                                  background="transparent"
                                  onClick={() => deleteItem(index)}
                                  leftIcon={<CloseIcon w="10px" color="red" />}
                                />
                                <Button
                                  mr="-20px"
                                  iconSpacing={0}
                                  background="transparent"
                                  onClick={(e) => openModal(index)}
                                  leftIcon={
                                    <EditIcon w="12px" color="orange" />
                                  }
                                />

                                <Button
                                  background="transparent"
                                  iconSpacing={0}
                                  id="checkbox"
                                  onClick={() => toggleSelected(index)}
                                  leftIcon={
                                    <CheckIcon color="green" w="12px" />
                                  }
                                />
                              </Flex>
                              <Flex>
                                <Text
                                  id={"description" + index}
                                  color="white"
                                  fontSize={{ base: "1rem", sm: "1.5rem" }}
                                >
                                  {" "}
                                  {item.description}
                                </Text>
                              </Flex>
                            </Box>
                          </Box>
                        );
                      })}
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </SimpleGrid>
          </Stack>
        </Box>
      </Stack>
    </ChakraProvider>
  );
}
