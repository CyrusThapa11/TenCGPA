import React from "react";

// import "../../"
import "../../App.css";
import { Box, ListItem, Stack, UnorderedList } from "@chakra-ui/react";

const Profile = () => {
  return (
    <div className="bg-allnote">
      <h2>Profile</h2>
      <Box>
        <Box>
          <Stack dir="row">
            <Box>
              <UnorderedList>
                <ListItem>Lorem, ipsum dolor.</ListItem>
                <ListItem>Lorem, ipsum dolor.</ListItem>
                <ListItem>Lorem, ipsum dolor.</ListItem>
                <ListItem>Lorem, ipsum dolor.</ListItem>
              </UnorderedList>
            </Box>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
