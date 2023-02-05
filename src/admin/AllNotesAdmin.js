import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
  Text,
  Select,
  MenuItemOption,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllNotesAdmin = () => {
  // todo fetch notes
  const [notes, setnotes] = useState(null);
  const [pageno, setpageno] = useState(1);
  const [perPageEntries, setperPageEntries] = useState(5);
  const [totalNotes, settotalNotes] = useState(0);

  const getAllNotes = async () => {
    // getting all note
    const { data } = await axios.get(
      `http://localhost:5000/api/notes/?page=${pageno}&limit=${perPageEntries}`
    );
    // map
    console.log("data", data);
    let newnotes = [...data.notes];
    // for (let [key, value] of Object.entries(data)) {
    //   // console.log("value", value);
    //   newnotes.push(value);
    // }
    console.log("newnotes", newnotes);
    setnotes(newnotes);
    settotalNotes(data.totalrows);
  };
  useEffect(() => {
    const getStudentMappings = async () => {
      // getting all note
      const { data } = await axios.get(
        "http://localhost:5000/api/students/?q=name&email"
      );
      // map
      let newnotes = [];
      for (let [key, value] of Object.entries(data)) {
        // console.log("value", value);
        newnotes.push(value);
      }
      setnotes(newnotes);
    };
    getAllNotes();
    // getStudentMappings();

    // todo also get student id
    return () => {};
  }, [pageno, perPageEntries]);

  const getNextData = () => {
    // console.log("getting next data ");
    // console.log("pageno", pageno);
    // console.log("perPageEntries", perPageEntries);
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
    <div className="my-16">
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <TableContainer w={["50vw", "80vw"]} boxShadow="2xl" p="4" rounded="xl">
          <Table variant="striped" colorScheme="teal">
            {/* <TableCaption>All Notes Table</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Notes-id</Th>
                <Th>Student-id</Th>
                <Th>Subject</Th>
                <Th>Price</Th>
                <Th>Type</Th>
                <Th>Stars</Th>
                <Th>Title</Th>
                <Th>View</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres </Td>
                <Td>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres </Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
                <Button p="3" mt="1" bg={"teal.200"}>
                  <Link to="/">View</Link>
                </Button>
              </Tr>

              {notes?.map((note) => {
                return (
                  <Tr key={note.nid}>
                    <Td>{note.nid}</Td>
                    <Td>{note.sid} </Td>
                    <Td> {note.subject} </Td>
                    <Td> {note.price} </Td>
                    <Td>{note.type} </Td>
                    <Td> {note.starcount} </Td>
                    <Td> {note.title?.substring(0, 15)} </Td>
                    <Button p="3" mt="1" bg={"teal.200"}>
                      <Link to={`/note/${note.nid}`}>View</Link>
                    </Button>
                  </Tr>
                );
              })}
            </Tbody>
            {/* <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th>multiply by</Th>
              </Tr>
            </Tfoot> */}

            <Box mt="5">
              <Box display="flex" cursor={"pointer"} mb="2">
                {" "}
                <Box
                  fontWeight={"bold"}
                  textColor={"teal.500"}
                  cursor={"pointer"}
                  border={"2px"}
                  p="2"
                  px="3"
                  mx="1"
                  rounded={"lg"}
                  onClick={() => getPrevData()}
                >
                  prev
                </Box>
                <Box
                  fontWeight={"bold"}
                  textColor={"teal.500"}
                  cursor={"pointer"}
                  border={"2px"}
                  p="2"
                  px="3"
                  mx="1"
                  rounded={"lg"}
                >
                  {pageno}{" "}
                </Box>
                <Box
                  fontWeight={"bold"}
                  textColor={"teal.500"}
                  cursor={"pointer"}
                  border={"2px"}
                  p="2"
                  px="3"
                  mx="1"
                  rounded={"lg"}
                >
                  {pageno + 1}{" "}
                </Box>
                <Box
                  fontWeight={"bold"}
                  textColor={"teal.500"}
                  cursor={"pointer"}
                  border={"2px"}
                  p="2"
                  px="3"
                  mx="1"
                  rounded={"lg"}
                >
                  {pageno + 2}{" "}
                </Box>
                <Box
                  fontWeight={"bold"}
                  textColor={"teal.500"}
                  cursor={"pointer"}
                  border={"2px"}
                  p="2"
                  px="3"
                  mx="1"
                  rounded={"lg"}
                  onClick={() => getNextData()}
                >
                  {" "}
                  next{" "}
                </Box>
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
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default AllNotesAdmin;
