import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  loginUser,
  registerUser,
  SET_LOADING,
  UNSET_LOADING,
} from "../actions/actions";

import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [User, setUser] = useState(null);
  const [Signup, setSignup] = useState(true);
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const login = () => {
    console.log("loggin in");
    dispatch(loginUser(User.email, User.password));
    navigate("/all-notes");
  };

  return (
    <Box
      pt="32"
      className="bg-register h-screen w-full flex items-center justify-center px-10  "
    >
      <Box className="   rounded-xl px-20 flex flex-col items-center justify-center w-[35vw] gap-3 ">
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
            onClick={login}
          >
            Submit
          </Button>
        </Box>
        <Box className="w-full ">
          <Box display={"flex"} justifyContent="space-between" px="2">
            <Text color="gray.400">Don't have an account ?</Text>
            <Link to="/register">
              <Text color="gray.400">Register</Text>
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

export default Login;
