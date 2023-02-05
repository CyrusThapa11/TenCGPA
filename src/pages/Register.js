import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  loginUser,
  registerUser,
  SET_LOADING,
  UNSET_LOADING,
} from "../actions/actions";

import "../App.css";

const Register = () => {
  const [User, setUser] = useState(null);
  const [Signup, setSignup] = useState(true);
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const createStudent = () => {
    console.log("creating aa student");
    console.log("User", User);
    // dispatch({ type: SET_LOADING });
    dispatch(registerUser(User.name, User.email, User.password, User.college));

    if (state?.error || state?.user?.error) {
      toast.error("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      navigate("/all-notes");
    }
  };

  return (
    <Box
      pt="32"
      className="bg-register h-screen w-full flex items-center justify-center px-10  "
    >
      <Box className="   rounded-xl px-20 flex flex-col items-center justify-center w-[35vw] gap-3 ">
        {Signup ? (
          <>
            <Input
              my="2"
              color="white"
              _placeholder={{ opacity: 0.4, color: "white" }}
              type="text"
              name="name"
              placeholder="name"
              value={User?.name || ""}
              onChange={(e) =>
                setUser({ ...User, [e.target.name]: e.target.value })
              }
            />

            <Input
              my="2"
              color="white"
              _placeholder={{ opacity: 0.4, color: "white" }}
              type="text"
              name="college"
              placeholder="college"
              value={User?.college || ""}
              onChange={(e) =>
                setUser({ ...User, [e.target.name]: e.target.value })
              }
            />
          </>
        ) : (
          <></>
        )}
        <Input
          my="2"
          color="white"
          _placeholder={{ opacity: 0.4, color: "white" }}
          type="email"
          name="email"
          placeholder="email"
          value={User?.email || ""}
          onChange={(e) =>
            setUser({ ...User, [e.target.name]: e.target.value })
          }
        />
        <Input
          my="2"
          color="white"
          _placeholder={{ opacity: 0.4, color: "white" }}
          type="password"
          name="password"
          placeholder="password"
          value={User?.password || ""}
          onChange={(e) =>
            setUser({ ...User, [e.target.name]: e.target.value })
          }
        />

        <Box className="w-full text-center">
          <Button
            className="border-2 shadow-lg rounded-md m-2 w-full"
            onClick={() => createStudent()}
          >
            Submit
          </Button>
        </Box>
        <Box className="w-full ">
          <Box display={"flex"} justifyContent="space-between" px="2">
            <Text color="gray.400">Already have an account ?</Text>
            <Link to="/login">
              <Text color="gray.400">Login</Text>
            </Link>
          </Box>
          <Box display={"flex"} justifyContent="space-between" px="2">
            <Text color="gray.400">Forgot your password ?</Text>
            <Text color="gray.400">Reset it</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
