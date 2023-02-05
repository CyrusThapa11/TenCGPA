import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Image,
  Input,
  ListItem,
  Select,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import "../App.css";
import Navbar from "../components/nav/Navbar";

import { BiUserCircle } from "react-icons/bi";
import { BsBookmarkStar } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { GrNotes } from "react-icons/gr";
import ProfileComponent from "./ProfileComponent";
import { FcNext, FcPrevious } from "react-icons/fc";
import StudentSavedNotes from "./StudentSavedNotes";
import DisplayNotes from "../components/notes/DisplayNotes";
import { Link } from "react-router-dom";

const StudentNotes = ({}) => {
  let notess = [];
  const [notes, setnotes] = useState(null);
  const [dashboardSection, setDashboardSection] = useState(0);
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
    <Box py="10" pb="10" px="16" className="profile h-auto " minH={"100vh"}>
      <Navbar />
      <Box mt="10 " p="5" pr="0" shadow={"3xl"}>
        <Box rounded="xl" boxShadow="2xl" bgColor={"whiteAlpha.400"}>
          <Stack
            direction="row"
            justify="space-between"
            spacing={10}
            shadow={"3xl"}
          >
            <Box p="10" w="20vw">
              <UnorderedList
                display={"flex"}
                flexDir="column"
                justifyContent={"space-between"}
              >
                <Link to="/student/dashboard/">
                  <ListItem
                    display="flex"
                    justifyContent={"flex-start"}
                    alignItems="center"
                    my="4"
                    gap="5"
                    listStyleType={"none"}
                    cursor={"pointer"}
                  >
                    <BiUserCircle size={20} />
                    <Text>User Info</Text>
                  </ListItem>
                </Link>
                <Link to="/student/dashboard/saved">
                  <ListItem
                    cursor={"pointer"}
                    my="4"
                    listStyleType={"none"}
                    display="flex"
                    gap="5"
                    justifyContent={"flex-start"}
                    alignItems="center"
                  >
                    <>
                      <BsBookmarkStar size={20} />
                      <Text>Saved</Text>
                    </>
                  </ListItem>
                </Link>
                <Link to="/student/dashboard/my-notes">
                  <ListItem
                    my="4"
                    cursor={"pointer"}
                    listStyleType={"none"}
                    display="flex"
                    gap="5"
                    justifyContent={"flex-start"}
                    alignItems="center"
                  >
                    <>
                      <GrNotes size={20} />
                      <Text>My Notes</Text>
                    </>
                  </ListItem>
                </Link>
                <Link to="/student/dashboard/my-testpapers">
                  <ListItem
                    my="4"
                    cursor={"pointer"}
                    listStyleType={"none"}
                    display="flex"
                    gap="5"
                    justifyContent={"flex-start"}
                    alignItems="center"
                  >
                    <>
                      <GrNotes size={20} />
                      <Text>My Test-papers</Text>
                    </>
                  </ListItem>
                </Link>
                <ListItem
                  my="4"
                  cursor={"pointer"}
                  listStyleType={"none"}
                  display="flex"
                  gap="5"
                  justifyContent={"flex-start"}
                  alignItems="center"
                >
                  <>
                    <TbLogout size={20} />
                    <Text>Logout</Text>
                  </>
                </ListItem>
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
              </UnorderedList>
            </Box>
            <Box rounded="xl" p="10" w="70vw " bgColor={"transparent"}>
              {/* <StudentSavedNotes /> */}
              <DisplayNotes notes={notes} />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentNotes;
