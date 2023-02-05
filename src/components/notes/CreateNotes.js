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
import "../../App.css";
import Navbar from "../../components/nav/Navbar";
import { BiUserCircle } from "react-icons/bi";

import { AiOutlineFileAdd } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { GrNotes } from "react-icons/gr";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Link } from "react-router-dom";
import TextEditor from "./TextEditor";

const StudentDashboard = () => {
  return (
    <Box py="10" pb="10" px="16" className="profile " minH={"100vh"}>
      <Navbar />
      <Box mt="10 " p="5" pr="0" shadow={"3xl"}>
        <Box rounded="xl" boxShadow="2xl" bgColor={"whiteAlpha.400"}>
          <Stack
            direction="row"
            justify="space-between"
            spacing={10}
            shadow={"3xl"}
          >
            <Box p="7" w="18vw">
              <UnorderedList
                display={"flex"}
                flexDir="column"
                justifyContent={"space-between"}
              >
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
                <Link to="/create-note">
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
                      <AiOutlineFileAdd size={20} />
                      <Text>Create Notes</Text>
                    </>
                  </ListItem>
                </Link>
                <Link to="/create-testpaper">
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
                      <AiOutlineFileAdd size={20} />
                      <Text>Create Testpaper</Text>
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
                    <GrNotes size={20} />
                    <Text>My Notes</Text>
                  </ListItem>{" "}
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
                    <GrNotes size={20} />
                    <Text>My Test-papers</Text>
                  </>
                </ListItem>
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
              </UnorderedList>
            </Box>
            {/* <Box rounded="xl" w="70vw" bgColor={"whiteAlpha.400"}> */}
            <TextEditor />
            {/* </Box> */}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
