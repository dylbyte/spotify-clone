import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import Player from "./player";

const PlayerBar = () => {
  return (
    <Box width="100vw" height="100px" bg="gray.900" padding="10px">
      <Flex align="center">
        <Box padding="20px" width="30%" color="white">
          <Text fontSize="large">Song Name</Text>
          <Text fontSize="sm">Artist Name</Text>
        </Box>
        <Box width="40%" color="white">
          <Player />
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
