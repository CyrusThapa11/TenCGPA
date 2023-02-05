import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Input, Select } from "@chakra-ui/react";

const Upload = () => {
  console.log("IN UPDATE NOTES");
  const { id } = useParams();
  const [Note, setNote] = useState({});
  const state = useSelector((state) => state.userReducer);
  const editor = useRef(null);
  const [content, setContent] = useState(null);
  const [publictype, setpublictype] = useState(true);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const uploadFiles = async () => {
    var formData = new FormData();
    let len = content.length;

    for (let i = 0; i < len; i++) {
      // console.log("content[i]", content[i]);
      formData.append("image", content[i]);
    }
    // formData.append("")
    console.log("Note", Note);
    for (const key in Note) {
      console.log("key", key);
      console.log("Note[key]", Note[key]);

      formData.append(`${key}`, Note[key]);
    }
    console.log("formData", formData);
    // console.log("content", content);
    // console.log("uploadFiles", uploadFiles);
    const data = await axios.post(
      "http://localhost:5000/api/testpapers/",
      // {
      //   formData,
      //   ...Note,
      // },
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );
    console.log("data", data.data);
  };
  const addImage = (e) => {
    console.log(content);
    e.preventDefault();

    setContent(e.target.files);
  };
  console.log("content", content);
  console.log("state in updateNote is ", Note);
  return (
    <Box h="inherit" w="80%" bgColor={"whiteAlpha.400"}>
      <Box className="flex flex-col rounded-xl h-full justify-evenly items-center  ">
        <Box display={"flex"} my="2" justifyContent="space-evenly" w="full">
          <Box>
            <label className="mr-10" htmlFor="">
              Your Sid
            </label>
            <Input
              outlineColor={"blackAlpha.900"}
              type="text"
              name="sid"
              onChange={(e) =>
                setNote({ ...Note, [e.target.name]: e.target.value })
              }
            />
          </Box>
          <Box className=" ">
            <label className="mr-10" htmlFor="">
              Your College
            </label>
            <Input
              outlineColor={"blackAlpha.900"}
              type="text"
              name="college"
              onChange={(e) =>
                setNote({ ...Note, [e.target.name]: e.target.value })
              }
            />
          </Box>
        </Box>
        <Box display={"flex"} my="2" justifyContent="space-evenly" w="full">
          <Box>
            <label className="mr-10" htmlFor="">
              Subject
            </label>
            <Select
              w="20vw"
              name="subcode"
              outlineColor="blackAlpha.800"
              onChange={(e) =>
                setNote({ ...Note, [e.target.name]: e.target.value })
              }
            >
              {/* <option> */}
              <option value="7">COA</option>
              <option value="8">OS</option>
              <option value="4">DBMS</option>
              <option value="6">DSA</option>
            </Select>
          </Box>
          <Box>
            <label className="mr-10" htmlFor="">
              Title
            </label>
            <Input
              outlineColor={"blackAlpha.900"}
              type="text"
              name="title"
              onChange={(e) =>
                setNote({ ...Note, [e.target.name]: e.target.value })
              }
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems="center"
          my="2"
          justifyContent="space-evenly"
          w="full"
        >
          <Box display={"flex"} flexDirection="column">
            <label className="" htmlFor="">
              Upload testpapers
            </label>
            <Input
              type="file"
              multiple={10}
              w="22vw"
              outlineColor={"blackAlpha.900"}
              outline="none"
              onChange={(e) => {
                e.preventDefault();
                setContent(e.target.files);
              }}
            />
          </Box>
          {/* <Box className="mt-5 border-2 px-7 py-2 rounded-lg shadow-xl cursor-pointer "> */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              uploadFiles();
            }}
          >
            Submit
          </Button>
        </Box>

        {/* </Box> */}
      </Box>{" "}
    </Box>
  );
};

export default Upload;
