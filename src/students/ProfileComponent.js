import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

const ProfileComponent = () => {
  return (
    <>
      <Box>
        <Box mb="5" display={"flex"}>
          <Image
            boxShadow={"xl"}
            rounded="full"
            src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
            w="8vw"
          />
          <Text
            display={"flex"}
            alignItems="center"
            mx="5"
            fontSize={"xl"}
            justifyContent={"center"}
          >
            User Sharma
          </Text>
        </Box>
        <Box display={"flex"} justifyContent="space-around" my="8">
          <Box display={"flex"} flexDirection="column" justifyContent={"start"}>
            <Text>Name</Text>
            <Input shadow={"md"} variant="filled" type="text" w="20vw" />
          </Box>

          <Box display={"flex"} flexDirection="column" justifyContent={"start"}>
            <Text>College</Text>
            <Input shadow={"md"} variant="filled" type="text" w="20vw" />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent="space-around" my="5">
          <Box display={"flex"} flexDirection="column" justifyContent={"start"}>
            <Text>Email</Text>
            <Input shadow={"md"} variant="filled" type="text" w="20vw" />
          </Box>

          <Box display={"flex"} flexDirection="column" justifyContent={"start"}>
            <Text>Password</Text>
            <Input shadow={"md"} variant="filled" type="text" w="20vw" />
          </Box>
        </Box>
        <Button
          color="blue.700"
          boxShadow={"2xl"}
          ml="20"
          outlineColor={"blue.800"}
          textColor={"blue.800"}
          variant={"outline"}
        >
          Update
        </Button>
      </Box>
    </>
  );
};

export default ProfileComponent;
