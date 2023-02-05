// import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NoteCard = ({ note }) => {
  return (
    <>
      <Box>
        <Center py={6}>
          <Box
            maxW={"335px"}
            w={"full"}
            // bg={"#C4FCF0"}
            bg={"whiteAlpha.400"}
            boxShadow={"2xl"}
            rounded={"md"}
            p={3}
            overflow={"hidden"}
          >
            {/* <Box
            h={"120px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              boxSize="120px"
              // backgroundPosition={"contain"}
              objectFit="cover"
              src={
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              layout={"fill"}
            />
          </Box> */}
            <Stack>
              <Heading
                color={useColorModeValue("balck.900", "white")}
                fontSize={"xl"}
                fontFamily={"body"}
              >
                {note.title || "Note-1"}
              </Heading>
              {/* 344B46 */}
              <Text color={"#35697C"} fontWeight="medium">
                {note.description +
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ."}
              </Text>
            </Stack>
            <Stack mt={3} direction={"row"} spacing={3} align={"center"}>
              <Avatar
                src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                alt={"Author"}
              />
              <Stack direction={"row"} spacing={0} fontSize={"sm"}>
                <Box px="3" alignItems={"space-between"}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={"gray.500"}>Feb 08, 2021 </Text>
                </Box>
                <Link to={`/note/${note.nid}`}>
                  <Button>View</Button>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
};
