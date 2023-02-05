import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../../actions/actions";
import { Link } from "react-router-dom";

const AllTests = () => {
  const [TestPapers, setTestPapers] = useState(null);

  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // TestPapers
    // dispatch(fetchNotes());
    const getNotes = async () => {
      const data = await axios.get("http://localhost:5000/api/testpapers");
      // console.log("data", data.data);
      let newTestPapers = [];
      for (const [key, value] of Object.entries(data.data)) {
        newTestPapers.push(value);
      }
      setTestPapers(newTestPapers);
    };
    getNotes();
    return () => {
      // cleanup;
    };
  }, []);
  console.log("TestPapers", TestPapers);
  return (
    <div className="flex items-center justify-center">
      {TestPapers ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-1 lg:m-2 p-5  gap-4 ">
          {TestPapers.map((testpapers) => {
            // console.log(typeof testpapers.description);
            // console.log("description", description);
            return (
              <div
                key={testpapers.tid}
                className="w-[30vw] rounded-xl bg-sky-300 shadow-xl p-5 "
              >
                <div>
                  <h2 className="text-xl"> {testpapers.title || "Note-1"}</h2>
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: `${testpapers.text} `,
                    }}
                  /> */}
                  <div>
                    {testpapers.description ||
                      "Introduction to DBMS / process mangament"}
                  </div>
                </div>
                <div className="flex m-2  justify-around">
                  <img
                    src={`${testpapers.link.split(" ")[0]}`}
                    alt=""
                    className="w-12 scale-125"
                  />
                  {/* <p>stars - {testpapers.startcount || 0}</p>
                  <p>price - {testpapers.price || "free"}</p> */}
                  <Link to={`/testpapers/${testpapers.tid}`}>VIEW</Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <h2>Loading data please wait</h2>
        </>
      )}
      {/* fetchTestPapers */}
    </div>
  );
};

export default AllTests;
