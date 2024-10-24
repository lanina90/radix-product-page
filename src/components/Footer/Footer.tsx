import {Box, Flex, Text} from "@radix-ui/themes";


const Footer = () => {
  return (
    <Box as="div" height="15vh" style={{ backgroundColor: "black"}}>
      <Flex justify="center" align="center" width="100%" height="100%">
        <Text size="7" style={{ color: "white"}}>Footer</Text>
      </Flex>
    </Box>
  );
};

export default Footer;