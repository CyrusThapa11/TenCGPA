import { Box } from "@chakra-ui/react";
import React from "react";
import { NoteCard } from "../Card/NoteCard";

const DisplayNotes = ({ notes }) => {
  return (
    <>
      <Box>
        <div className="">
          {notes ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-1 lg:m-2 p-5 items-center gap-4 ">
              {notes.map((note) => {
                return <NoteCard note={note} />;
              })}
            </div>
          ) : (
            <>
              <h2>Loading data please wait</h2>
            </>
          )}
        </div>
      </Box>
    </>
  );
};

export default DisplayNotes;
