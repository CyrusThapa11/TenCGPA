import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../../actions/actions";
import { Link } from "react-router-dom";
import { FcNext, FcPrevious } from "react-icons/fc";
import "../../App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { NoteCard } from "../Card/NoteCard";
import Navbar from "../nav/Navbar";
import DisplayNotes from "./DisplayNotes";

const AllNotes = () => {
  const [notes, setnotes] = useState(null);
  const [pageno, setpageno] = useState(1);
  const [perPageEntries, setperPageEntries] = useState(5);
  const [totalNotes, settotalNotes] = useState(0);
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const getAllNotes = async () => {
    // getting all note
    const { data } = await axios.get(
      `http://localhost:5000/api/notes/?page=${pageno}&limit=${perPageEntries}`
    );
    // map
    console.log("data", data);
    let newnotes = [...data.notes];

    console.log("newnotes", newnotes);
    setnotes(newnotes);
    settotalNotes(data.totalrows);
  };
  useEffect(() => {
    getAllNotes();
    return () => {
      // cleanup;
    };
  }, [pageno, perPageEntries]);
  console.log("notes", notes);

  const getNextData = () => {
    console.log("totalNotes", totalNotes);
    if (parseInt(perPageEntries) * parseInt(pageno) >= parseInt(totalNotes))
      return;
    // getAllNotes(parseInt(pageno) + 1);
    setpageno((pageno) => parseInt(pageno) + 1);

    //
  };

  const getPrevData = () => {
    if (pageno === 1) return;
    // console.log("getting previous data");
    setpageno((pageno) => parseInt(pageno) - 1);
    // getAllNotes();
  };

  return (
    <>
      <Box py="10" pb="10" px="16" display={"relative"} className="bg-allnote">
        <Navbar />
        <HStack align="start">
          <Box mt="14">
            <Box>
              <Card
                display={"absolute"}
                // position
                top={"0"}
                // bgColor="whatsapp.50"
                bgColor="whiteAlpha.400"
                key={"filled"}
                shadow="2xl"
                variant={"filled"}
                maxH="100vh"
                minH={"70vh"}
                w="20vw"
                // bg="blackAlpha.200 "
              >
                {/* <CardHeader>
                  <Heading size="md">
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, aspernatur.
                  </Heading>
                </CardHeader> */}
                <CardBody>
                  <Stack
                    divider={<StackDivider borderColor={"blackAlpha.900"} />}
                    spacing="4"
                  >
                    <Box>
                      <Text mb="2"> Search by Keyword </Text>
                      <InputGroup size="sm">
                        <Input
                          type={"text"}
                          bgColor="whiteAlpha.900"
                          borderColor={"blackAlpha.900"}
                          placeholder={"SEARCH"}
                          // color="blackAlpha.900"
                          color="blackAlpha.900"
                          className="bg-white"
                          focusBorderColor="black.900"
                        />
                        <InputRightAddon
                          children="Search"
                          cursor={"pointer"}
                          borderColor="blackAlpha.900"
                        />
                      </InputGroup>
                    </Box>
                    <Box>
                      <Text mb="2"> Search by Subject </Text>
                      <InputGroup size="sm">
                        <Select
                          // bg="tomato"
                          borderColor="black.900"
                          color="black.900"
                        >
                          <option defaultChecked value="1">
                            COA
                          </option>
                          <option value="2">DBMS</option>
                          <option value="3">OOPS</option>
                          <option value="4">PSYCHO</option>
                          <option value="5">SOCIO</option>
                          <option value="6">CN</option>
                          <option value="7">DSA</option>
                        </Select>
                      </InputGroup>
                    </Box>
                    <Box>
                      <Text mb="2"> Search by Keyword </Text>
                      <Stack spacing={5} direction="row">
                        <Checkbox
                          color={"black.900"}
                          colorScheme="red"
                          borderColor={"black.900"}
                        >
                          Checkbox
                        </Checkbox>
                        <Checkbox
                          color={"black.900"}
                          colorScheme="green"
                          borderColor={"black.900"}
                        >
                          Checkbox
                        </Checkbox>
                      </Stack>
                    </Box>
                    <Box>
                      <Text mb="2"> Sort </Text>
                      <RadioGroup defaultValue="2">
                        <Stack spacing={5} direction="row">
                          <Radio colorScheme="red" value="1">
                            Ascending
                          </Radio>
                          <Radio colorScheme="green" value="2">
                            Descending
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </Box>
                    <Box mt="5">
                      <Box display="flex" cursor={"pointer"} mb="2">
                        <Button
                          size="sm"
                          fontWeight={"bold"}
                          textColor={"teal.500"}
                          cursor={"pointer"}
                          border={"2px"}
                          p="1"
                          px="1"
                          mx="1"
                          rounded={"lg"}
                          onClick={() => getPrevData()}
                        >
                          <FcPrevious />
                        </Button>
                        <Button
                          size="sm"
                          fontWeight={"bold"}
                          textColor={"black.900"}
                          cursor={"pointer"}
                          border={"2px"}
                          p="1"
                          px="1"
                          mx="1"
                          rounded={"lg"}
                        >
                          {pageno}
                        </Button>
                        <Button
                          size="sm"
                          fontWeight={"bold"}
                          textColor={"black.900"}
                          cursor={"pointer"}
                          border={"2px"}
                          p="1"
                          px="1"
                          mx="1"
                          rounded={"lg"}
                        >
                          {pageno + 1}
                        </Button>
                        <Button
                          size="sm"
                          fontWeight={"bold"}
                          textColor={"black.900"}
                          cursor={"pointer"}
                          border={"2px"}
                          p="1"
                          px="1"
                          mx="1"
                          rounded={"lg"}
                        >
                          {pageno + 2}
                        </Button>
                        <Button
                          size="sm"
                          fontWeight={"bold"}
                          textColor={"black.900"}
                          cursor={"pointer"}
                          border={"2px"}
                          p="1"
                          px="1"
                          mx="1"
                          rounded={"lg"}
                          onClick={() => getNextData()}
                        >
                          <FcNext />
                        </Button>
                      </Box>
                      <Box>
                        <Select
                          variant="filled"
                          bg="teal.100"
                          defaultValue={"5"}
                          onChange={(e) => setperPageEntries(e.target.value)}
                        >
                          <option defaultChecked={true} value="5">
                            5
                          </option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                        </Select>
                      </Box>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </Box>
          <Box>
            <DisplayNotes notes={notes} />
          </Box>
        </HStack>
        <Box
          bgColor={"whiteAlpha.400"}
          mt="10"
          rounded="lg"
          p="5"
          h="30vh"
          w="full"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          aliquam dicta laudantium perferendis distinctio beatae a eveniet
          voluptatibus reprehenderit eos?
        </Box>
      </Box>

      {/* fetchnotes */}
    </>
  );
};

export default AllNotes;
