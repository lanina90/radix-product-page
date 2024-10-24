import {Box, Flex, Heading, Separator, Text} from "@radix-ui/themes";
import Search from "./Search.tsx";
import Bucket from "./Bucket.tsx";
import Menu from "./Menu.tsx";


const Header = () => {
  return (
    <Box style={{margin: "auto"}} height={"100px"} p="20px" maxWidth="1440px">
     <Flex direction='column' gap='20px'>
       <Flex justify="between">
         <Heading size="7">BR.<span style={{color: "grey"}}>N</span></Heading>
         <Search/>
         <Bucket/>
       </Flex>
       <Menu/>
     </Flex>
      <Separator my="4" size="4" />
    </Box>
  );
};

export default Header;