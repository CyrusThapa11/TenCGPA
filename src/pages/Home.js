import { Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import "../App.css";

import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiSpreadsheet } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      h="full"
      textColor={"whiteAlpha.900"}
      w={"full"}
      px="16"
      pt="7"
      className="home"
      // mb="20"
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box>
          <Text fontSize={"3xl"} fontWeight="bold">
            NoteIt
          </Text>
        </Box>
        <Box
          display={"flex"}
          fontSize={"lg"}
          justifyContent="space-between"
          alignItems={"center"}
          w="56"
        >
          <Link to="/register">
            <Text
              className="hover:bg-white hover:text-blue-400 "
              cursor={"pointer"}
              _hover
              border={"2px"}
              px="8"
              py="2"
              rounded={"lg"}
            >
              Signup
            </Text>
          </Link>
          <Link to="/login">
            <Text cursor={"pointer"}>Login</Text>
          </Link>
        </Box>
      </Box>
      <Box className="hero h-auto w-full ">
        <Box py="28" px="10" display={"flex"} justifyContent="space-around">
          <Box w="68%">
            <Box py="2">
              <Text fontSize={"4xl"} fontWeight="bold">
                schext - The new way for appointment scheduling
              </Text>
            </Box>
            <Box py="2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              illo alias ex quo. Veniam praesentium itaque expedita amet.
              Praesentium, laboriosam. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Officiis illo alias ex quo. Veniam praesentium
              itaque expedita amet. Praesentium, laboriosam.
            </Box>
            <Box py="2">
              <Button colorScheme="whiteAlpha">Get Started</Button>
            </Box>
          </Box>
          <Box w="25%">
            <img src="/bloggers.svg" alt="" srcset="" />
          </Box>
        </Box>
      </Box>
      <Box className=" h-[30vh] w-full mb-20">
        <Box>
          <Box
            bg={"whiteAlpha.400"}
            h="35vh"
            rounded="lg"
            px="20"
            py="7"
            display={"flex"}
            justifyContent="space-between"
          >
            <Box
              display={"flex"}
              flexDir="column"
              justifyContent="space-around"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"} fontWeight="semibold">
                Take & Upload Notes
              </Text>
              <GiNotebook size={"90"} />
            </Box>
            <Box
              display={"flex"}
              flexDir="column"
              justifyContent="space-around"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"} fontWeight="semibold">
                Be Productive
              </Text>
              <HiOutlineLightBulb size={"90"} />
            </Box>
            <Box
              display={"flex"}
              flexDir="column"
              justifyContent="space-around"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"} fontWeight="semibold">
                Get Good Grades...
              </Text>
              <BiSpreadsheet size={"90"} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box h="auto" mb="10" px="5" py="16">
        <Box display={"flex"} alignItems="center">
          <>
            <Box w="45vw">
              <img src="/contentwriter.svg" alt="" className="w-full" />
            </Box>
          </>
          <Box display={"flex"} flexDir="column">
            <Text fontSize={"4xl"} fontWeight="bold" textAlign="center">
              Better Search here for notes/question paper rather than searching
              in your cabinet...
            </Text>
            <Box textAlign={"center"} mt="4">
              <Link to="/all-notes">
                <Button
                  variant={"outline"}
                  w="25"
                  size="lg"
                  fontWeight={"semibold"}
                  className="hover:text-blue-400 border-4"
                >
                  Get Started
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box h="auto" pb="10">
        <Box
          display={"flex"}
          justifyContent="space-around"
          alignItems={"center"}
        >
          <Box>
            <Box>
              <UnorderedList>
                <ListItem py="1" listStyleType={"none"}>
                  About Us
                </ListItem>
                <ListItem py="1" listStyleType={"none"}>
                  Contact Us
                </ListItem>
                <ListItem py="1" listStyleType={"none"}>
                  LogIn
                </ListItem>
                <ListItem py="1" listStyleType={"none"}>
                  SignUp
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box>
            <Box>
              <UnorderedList>
                <ListItem py="1" listStyleType={"none"}>
                  Term & Conditions
                </ListItem>
                <ListItem py="1" listStyleType={"none"}>
                  Privacy Policy
                </ListItem>
                <Box py="1" listStyleType={"none"} display="flex" gap={"2"}>
                  <AiFillGithub size="30" />
                  <AiOutlineLinkedin size="30" />
                  <FiTwitter size="30" />
                </Box>
              </UnorderedList>
            </Box>
          </Box>
          <Box>
            <Box>
              <UnorderedList></UnorderedList>
            </Box>
          </Box>
          <Box>
            <Box>
              <UnorderedList>
                <ListItem
                  fontSize={"2xl"}
                  fontWeight="bold"
                  py="1"
                  listStyleType={"none"}
                >
                  NoteIt
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
