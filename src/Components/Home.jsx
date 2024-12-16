import { AddIcon, ArrowForwardIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  flattenTokens,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* NAv HEADING */}
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={3}
        boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <Heading fontFamily={"Montserrat, sans-serif"} fontWeight={900} mb={4}>
          Work Matic
        </Heading>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"2em"}
        >
          <Heading fontSize={"1em"}>Hey! Amaan</Heading>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              fontWeight={700}
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
            >
              More <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Contact Us</MenuItem>
              <MenuDivider />
              <MenuItem>Reference</MenuItem>
              <MenuItem color={"red"}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"2em"}
      >
        <Heading>Your Boards</Heading>
        <Link to={"/createBoard"}>
          <Button
            rightIcon={<AddIcon />}
            colorScheme="black"
            variant="outline"
            _hover={{ bg: "black", color: "white" }}
          >
            New
          </Button>
        </Link>
      </Box>
    </>
  );
};
