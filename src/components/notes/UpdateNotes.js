import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, SET_LOADING, UNSET_LOADING } from "../../actions/actions";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateNotes = () => {
  console.log("IN UPDATE NOTES");
  const { id } = useParams();
  const [Note, setNote] = useState({ type: "public" });
  const state = useSelector((state) => state.userReducer);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [publictype, setpublictype] = useState(true);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    // todo set current notes data !

    const getNote = async () => {
      console.log("getting note");
      const { data } = await axios.get(`http://localhost:5000/api/notes/${id}`);
      console.log("getNote ");
      setNote(data[0]);
      setContent(data[0].text);
    };
    getNote();
    return () => {
      // cleanup
    };
  }, []);
  const config = {
    // toolbarButtonSize: "large",
    // buttons:
    //   "bold,italic,underline,ul,ol,font,fontsize,paragraph,superscript,subscript,copy,hr,table,symbols,left,preview,print",
  };
  const updateNotes = () => {
    // add to data base
    dispatch({ type: SET_LOADING });
    setloading(true);
    setTimeout(() => {
      dispatch(
        updateNote(
          id,
          Note.description,
          Note.sid,
          Note.subject,
          Note.type,
          Note.title,
          Note.text,
          Note.shared
        )
      );
    }, 1000);

    dispatch({ type: UNSET_LOADING });
    console.log("updaign notes");
    setloading(false);
    console.log("Note", Note);
  };
  console.log("state in updateNote is ", Note);
  return (
    <>
      {state?.loading || state?.user?.loading || loading ? (
        <>
          <h1 className="text-2xl">Loading</h1>
        </>
      ) : (
        <></>
      )}
      <div className="h-[100vh] w-[100vw] ">
        <div className="flex flex-col rounded-xl shadow-xl bg-sky-400 justify-center items-center mx-10  my-5 p-5  ">
          <div className="mt-5 ">
            <label className="mr-10" htmlFor="">
              Your Sid
            </label>
            <input
              className="outline-none"
              type="number"
              name="sid"
              value={Note.sid}
              onChange={(e) =>
                setNote({ ...Note, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mt-5 ">
            <label className="mr-10" htmlFor="">
              title
            </label>
            <input
              className="outline-none"
              type="text"
              name="title"
              value={Note.title}
              onChange={(e) =>
                setNote({ ...Note, [e.target.name]: e.target.value })
              }
            />
          </div>{" "}
          <div className="mt-5 ">
            <label className="mr-10" htmlFor="">
              Note type
            </label>
            {/* <input className="outline-none" type="text"  />
             */}
            <select
              id=""
              name="type"
              value={Note.type}
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
            </select>
          </div>
          <div className="mt-5 ">
            <label className="mr-10" htmlFor="">
              Your Sid
            </label>
            <input
              className="outline-none"
              type="text"
              name="shared"
              value={Note.shared || ""}
              onChange={(e) =>
                setNote({ ...Note, [e.target.name]: e.target.value })
              }
              disabled={publictype}
            />
          </div>
          <div className="mt-5 ">
            <label className="mr-10" htmlFor="">
              Subject
            </label>
            <select
              id=""
              name="subject"
              value={Note.subject}
              onChange={(e) =>
                setNote({ ...Note, [e.target.name]: e.target.value })
              }
            >
              {/* <option> */}
              <option value="7">COA</option>
              <option value="8">OS</option>
              <option value="4">DBMS</option>
              <option value="6">DSA</option>
            </select>
          </div>
          <div className="mt-5 ">
            <label className="mr-10" htmlFor="">
              description
            </label>
            <input
              className="outline-none"
              type="text"
              value={Note.description}
              name="description"
              onChange={(e) =>
                setNote({ ...Note, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mt-5 w-[60vw]  ">
            <JoditEditor
              ref={editor}
              value={content}
              // config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => {
                setContent(newContent);
                console.log("newContent", newContent);
                setNote({ ...Note, text: newContent });
              }} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
          </div>
          <div className="mt-5 border-2 px-7 py-2 rounded-lg shadow-xl cursor-pointer ">
            <button onClick={() => updateNotes()}>Submit</button>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default UpdateNotes;
