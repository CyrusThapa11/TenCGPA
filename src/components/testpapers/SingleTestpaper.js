import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineFire, AiOutlineStar } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Button } from "@chakra-ui/react";

const SingleTestpaper = () => {
  // get id from parsms
  const { id } = useParams();
  const [note, setnote] = useState(null);
  useEffect(() => {
    // get note
    const getTestpaper = async () => {
      console.log("getting note");
      const { data } = await axios.get(
        `http://localhost:5000/api/testpapers/${id}`
      );
      console.log("data", data);
      setnote(data[0]);
    };
    getTestpaper();
    return () => {
      // cleanup
    };
  }, []);

  const editNote = (nid) => {
    // console.log("updating note");
  };

  return (
    <div className="flex px-32 py-8  justify-around">
      <div className="mr-5 h-[45vh] flex flex-col  items-center justify-around ">
        <div className="cursor-pointer  hover:bg-red-300 rounded-lg p-1 ">
          <AiOutlineFire
            size="40px"
            className="text-red-500 hover:text-white bg-rounded "
          />
        </div>
        <div className="cursor-pointer hover:text-white hover:bg-purple-300 rounded-lg p-1 ">
          <FaRegComment
            size="40px"
            className="text-purple-500 hover:text-white "
          />
        </div>
        <div className="cursor-pointer hover:text-white hover:bg-blue-300 rounded-lg p-1 ">
          <AiOutlineStar
            size="43px"
            className="text-blue-500 hover:text-white "
          />
        </div>
        <div className="cursor-pointer hover:text-white hover:bg-orange-300 rounded-lg p-1 ">
          <BiDotsVerticalRounded
            size="43px"
            className="text-orange-500 hover:text-white "
          />
        </div>
      </div>
      <div className="h-auto min-h-[80vh] w-[50vw] shadow-xl rounded-lg bg-teal-300 px-5 py-7 relative ">
        {note ? (
          <>
            <div className="h-full w-full">
              <h2>{note.title || " Note - 1 "}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${note.text} `,
                }}
              />
              <div className="rounded-lg border-4 bg-teal-400 px-5 py-1 my-5   w-[40%] text-center cursor-pointer ">
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
              </div>
              <div className=" mt-10 flex items-center justify-between absolute bottom-10 ">
                {/* <input type="text" className="bg-teal-200 w-full h-full" /> */}
                <textarea
                  className="bg-teal-100 min-h-[8vh] outline-none rounded-md w-[70%] h-full max-h-[10vh] p-3 "
                  name=""
                  id=""
                  cols="60"
                  rows="2"
                ></textarea>
                <button className="px-5 py-1 rounded-lg bg-teal-100 h-[8vh]">
                  ADD COMMENT
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl">Loading note !</h2>
          </>
        )}
      </div>
      <div className="mx-4 p-5 bg-teal-300 h-[50vh] w-[15vw] rounded-lg shadow-xl ">
        <h2>User Info</h2>
      </div>
    </div>
  );
};

export default SingleTestpaper;
