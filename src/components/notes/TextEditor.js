import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { addNotes, SET_LOADING, UNSET_LOADING } from "../../actions/actions";
import { Box, Button, Input, Select } from "@chakra-ui/react";

const TextEditor = () => {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [Note, setNote] = useState({ type: "public" });
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [publictype, setpublictype] = useState(true);
  const [loading, setloading] = useState(false);
  const config = {
    // toolbarButtonSize: "large",
    // buttons:
    //   "bold,italic,underline,ul,ol,font,fontsize,paragraph,superscript,subscript,copy,hr,table,symbols,left,preview,print",
  };
  const addNote = () => {
    // add to data base
    dispatch({ type: SET_LOADING });
    setloading(true);
    setTimeout(() => {
      dispatch(
        addNotes(
          Note.text,
          Note.description,
          Note.sid,
          Note.subject,
          Note.type,
          Note.title,
          Note.shared
        )
      );
    }, 1000);

    dispatch({ type: UNSET_LOADING });
    console.log("updaign notes");
    setloading(false);
    console.log("Note", Note);
  };

  return (
    <>
      {state?.loading || state?.user?.loading || loading ? (
        <>
          <h1 className="text-2xl">Loading</h1>
        </>
      ) : (
        <></>
      )}
      <Box h="inherit" className=" w-full" bgColor={"whiteAlpha.400"}>
        <Box className="flex h-full flex-col py-10 rounded-xl justify-evenly items-center  ">
          <Box display={"flex"} justifyContent="space-evenly" w="full">
            <Box className="">
              <label className="mr-10" htmlFor="">
                Your Sid
              </label>
              <Input
                outlineColor={"blackAlpha.900"}
                type="number"
                name="sid"
                onChange={(e) =>
                  setNote({ ...Note, [e.target.name]: e.target.value })
                }
              />
            </Box>
            <Box className=" ">
              <label className="mr-10" htmlFor="">
                title
              </label>
              <Input
                size={"lg"}
                outlineColor={"blackAlpha.900"}
                type="text"
                name="title"
                onChange={(e) =>
                  setNote({ ...Note, [e.target.name]: e.target.value })
                }
              />
            </Box>
          </Box>
          <Box display={"flex"} my="2" justifyContent="space-evenly" w="full">
            <Box outlineColor="none" border="2">
              <label className="mr-10" htmlFor="">
                Note type
              </label>

              <Select
                w="23vw"
                id=""
                name="type"
                outlineColor="blackAlpha.800"
                onChange={(e) => {
                  setNote({ ...Note, [e.target.name]: e.target.value });
                  if (e.target.value === "private") {
                    // set and unset
                    setpublictype(false);
                  } else {
                    // setand
                    setpublictype(true);
                  }
                }}
              >
                <option value="public">public</option>
                <option value="private">private</option>
              </Select>
            </Box>
            <Box className=" ">
              <label className="mr-10" htmlFor="">
                Sharre with
              </label>
              <Input
                outlineColor={"blackAlpha.900"}
                type="text"
                name="shared"
                onChange={(e) =>
                  setNote({ ...Note, [e.target.name]: e.target.value })
                }
                disabled={publictype}
              />
            </Box>
          </Box>
          <Box display={"flex"} my="2" justifyContent="space-evenly" w="full">
            <Box border="2">
              <label className="mr-10" htmlFor="">
                Subject
              </label>
              <Select
                w="23vw"
                id=""
                outlineColor="blackAlpha.800"
                name="subject"
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
                Description
              </label>
              <Input
                outlineColor={"blackAlpha.900"}
                type="text"
                name="description"
                onChange={(e) =>
                  setNote({ ...Note, [e.target.name]: e.target.value })
                }
              />
            </Box>
          </Box>
          <Box className="mt-5 w-[80%]   ">
            <JoditEditor
              ref={editor}
              value={content}
              // config={config}
              className="h-[50vh]"
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => {
                setContent(newContent);
                console.log("newContent", newContent);
                setNote({ ...Note, text: newContent });
              }} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
          </Box>
          <Button onClick={() => addNote()}>Submit</Button>
        </Box>
      </Box>
    </>
  );
};

export default TextEditor;
