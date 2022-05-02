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
} from "@chakra-ui/react";
import { CloseIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";
export default function Home() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [inputList, setInputList] = useState([]);
  const [textAreaCount, ChangeTextAreaCount] = useState(0);
  const [description, setDescription] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  const charCount = (e) => {
    setDescription(e.target.value.length);
    setValue2(e.target.value);
  };
  const titleCount = (e) => {
    ChangeTextAreaCount(e.target.value.length);
    setValue(e.target.value);
  };
  const newTitle = (e) => {
    setValue3(e.target.value);
  };
  const newDescription = (e) => {
    setValue4(e.target.value);
  };

  const UpdateItem = (e) => {
    e.preventDefault();
    document.getElementById("title").innerHTML = value3;
    document.getElementById("description").innerHTML = value4;
    onClose();
  };
  const onAddBtnClick = () => {
    setInputList(inputList.concat(<TaskItem key={inputList.length} />));
    document.getElementById("task-title").value = "";
    document.getElementById("task-description").value = "";
    ChangeTextAreaCount(0);
    setDescription(0);
    setValue2("");
    setValue("");
  };
  const removeInput = () => {
    setInputList(inputList.slice(0, 0));
  };
  const removeInput1 = () => {
    setInputList(inputList.slice(this));
  };
  function completeItem(e) {
    e.target.parentNode.parentNode.parentNode.parentNode.style.setProperty(
      "text-decoration",
      "line-through"
    );
  }

  const TaskItem = () => {
    return (
      <Flex flexDir="column" id="taskItem">
        <Box
          w={{ base: "300px", md: "100%" }}
          h={{ base: "10vh", md: "10vh" }}
          mb="3vh"
          py="10px"
          px="30px"
          shadow="0px 0px 10px 0px rgba(0,0,0,0.75);"
          className="task-item"
          borderRadius="10px"
        >
          <Box
            borderLeft={"4px solid red"}
            borderLeftRadius="2px"
            zIndex={0}
            pl="10px"
            h="100%"
          >
            {" "}
            <Flex>
              <Text
                fontSize={{ base: "1rem", md: "1.5rem" }}
                fontWeight={"600"}
                id="title"
              >
                {" "}
                {value.toString()}
              </Text>
              <Spacer />

              <Button
                mr="-20px"
                iconSpacing={0}
                background="transparent"
                onClick={removeInput1}
                leftIcon={<CloseIcon w="10px" color="red" />}
              />
              <Button
                mr="-20px"
                iconSpacing={0}
                background="transparent"
                onClick={onOpen}
                leftIcon={<EditIcon w="12px" color="orange" />}
              />

              <Button
                background="transparent"
                iconSpacing={0}
                onClick={completeItem}
                leftIcon={<CheckIcon color="green" w="12px" />}
              />
            </Flex>
            <Flex flexDir={"column"} lineHeight="30px">
              <Text id="description"> {value2.toString()}</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  };

  return (
    <ChakraProvider>
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
                ref={initialRef}
                placeholder="Edit Title"
                onChange={newTitle}
                maxLength={25}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Edit Description</FormLabel>
              <Input
                maxLength={25}
                placeholder="Edit Descriptiom"
                onChange={newDescription}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={UpdateItem}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* MODAL END */}
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
                rowGap={{ base: 0, sm: "20px", lg: "40px" }}
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
                  h={{ base: "40vh", md: "30vh", lg: "50vh" }}
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
