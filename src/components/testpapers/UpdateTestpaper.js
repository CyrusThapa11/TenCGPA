import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, SET_LOADING, UNSET_LOADING } from "../../actions/actions";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateTestpaper = () => {
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
    const data = await axios.patch(
      "http://localhost:5000/api/testpapers/",
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
    <>
      <div>
        <>
          {/* <form className="bg-sky-300"></form> */}
          <div className="h-[70vh] w-[80vw] ">
            <div className="flex flex-col rounded-xl shadow-xl bg-sky-400 justify-center items-center mx-10  my-5 p-5  ">
              <div className="mt-5 ">
                <label className="mr-10" htmlFor="">
                  Your Sid
                </label>
                <input
                  className="outline-none"
                  type="number"
                  name="sid"
                  onChange={(e) =>
                    setNote({ ...Note, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="mt-5 ">
                <label className="mr-10" htmlFor="">
                  Your College
                </label>
                <input
                  className="outline-none"
                  type="text"
                  name="college"
                  onChange={(e) =>
                    setNote({ ...Note, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="mt-5 ">
                <label className="mr-10" htmlFor="">
                  Title
                </label>
                <input
                  className="outline-none"
                  type="text"
                  name="title"
                  onChange={(e) =>
                    setNote({ ...Note, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div className="mt-5 ">
                <label className="mr-10" htmlFor="">
                  Subject
                </label>
                <select
                  name="subcode"
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
                  Upload testpapers
                </label>
                <input
                  type="file"
                  multiple={10}
                  onChange={(e) => {
                    e.preventDefault();
                    setContent(e.target.files);
                  }}
                />
              </div>
              <div className="mt-5 border-2 px-7 py-2 rounded-lg shadow-xl cursor-pointer ">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    uploadFiles();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>{" "}
          </div>
        </>
      </div>
    </>
  );
};

export default UpdateTestpaper;
