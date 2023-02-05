import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineFire, AiOutlineStar } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  Box,
  Button,
  Card,
  Divider,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  StackDivider,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
//
import Navbar from "../nav/Navbar";

const SingleNote = () => {
  // get id from parsms
  const { id } = useParams();
  const [note, setnote] = useState(null);
  useEffect(() => {
    // get note
    const getNote = async () => {
      console.log("getting note");
      const { data } = await axios.get(`http://localhost:5000/api/notes/${id}`);
      console.log("data", data);
      setnote(data[0]);
    };
    getNote();
    return () => {
      // cleanup
    };
  }, []);

  const editNote = (nid) => {
    // console.log("updating note");
  };
  return (
    <Box p="10" className="create-note">
      <Navbar />
      <div className="flex transition-all ease-in px-32 py-8  justify-between">
        <div className="mr-5 h-[50vh] flex flex-col  items-center justify-around ">
          <div className="cursor-pointer  transition ease-in-out hover:rounded-full hover:text-yellow-700 hover:bg-yellow-100 rounded-lg p-2 ">
            <AiOutlineFire size="28px" className="  bg-rounded " />
          </div>
          <div className="cursor-pointer transition ease-in-out hover:rounded-full hover:text-purple-600 hover:bg-purple-100 rounded-lg p-2 ">
            <FaRegComment size="28px" className="  " />
          </div>
          <div className="cursor-pointer transition ease-in-out hover:rounded-full hover:text-blue-600 hover:bg-blue-100 rounded-lg p-2 ">
            <AiOutlineStar size="28px" className="  " />
          </div>
          <div className="cursor-pointer transition ease-in-out hover:rounded-full hover:text-teal-600 hover:bg-teal-100 rounded-lg p-2 ">
            <BiDotsVerticalRounded size="28px" className="  " />
          </div>
          <div className="cursor-pointer transition ease-in-out hover:rounded-full hover:text-orange-600 hover:bg-orange-100 rounded-lg p-2 ">
            <FiEdit size="28px" className="  " />
          </div>
          <div className="cursor-pointer transition ease-in-out hover:rounded-full hover:text-red-600 hover:bg-red-100 rounded-lg p-2 ">
            <RiDeleteBin5Line size="28px" className="  " />
          </div>
        </div>
        <Card
          variant={"elevated"}
          bgColor="whiteAlpha.600"
          maxW={"70vw"}
          w="50vw"
        >
          <div className="h-auto min-h-[80vh] rounded-lg  px-12 py-7  ">
            {note ? (
              <>
                {/* <div className="h-full w-full"> */}
                <VStack justify={"space-between"} h="full">
                  <Box>
                    <h2>{note.title || " Note - 1 "}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${note.text} `,
                      }}
                    />
                    {/* <div className="rounded-lg border-4 bg-teal-400 px-5 py-1 my-5   w-[40%] text-center cursor-pointer ">
                      <Link
                        className=" w-[100%] text-center cursor-pointer "
                        to={`/note/edit/${note.nid}`}
                      >
                        EDIT
                      </Link>
                    </div>{" "}
                    <div>
                      <Button p="5" mt="1" bg={"red.600"}>
                        DELETE
                      </Button>
                    </div> */}
                  </Box>
                  <Box className=" flex items-center justify-between  bottom-10 w-[100%] flex-col ">
                    <Divider
                      orientation="horizontal"
                      my="10"
                      h={10}
                      colorScheme="purple"
                    />
                    <InputGroup size="md">
                      <Input placeholder="Comment..." />
                      <InputRightAddon children="ADD" cursor={"pointer"} />
                    </InputGroup>
                  </Box>
                </VStack>
                {/* </div> */}
              </>
            ) : (
              <>
                <h2 className="text-xl">Loading note !</h2>
              </>
            )}
          </div>
        </Card>
        <Box
          w="15vw "
          bgColor={"whiteAlpha.600"}
          h="50vh"
          p="7"
          rounded={"lg"}
          boxShadow="lg"
        >
          {/* <div className="mx-4 p-5 bg-orange-400 h-[50vh] w-[15vw] rounded-lg  "> */}
          <h2>User Info</h2>
          {/* </div> */}
        </Box>
      </div>
    </Box>
  );
};

export default SingleNote;
