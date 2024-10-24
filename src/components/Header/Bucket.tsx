import {Avatar, Box, Flex, Text} from "@radix-ui/themes";
import {BackpackIcon, HeartIcon, PersonIcon} from "@radix-ui/react-icons";


const Bucket = () => {
  return (
    <Box>
      <Flex gap='20px'>
        <Flex gap='10px' align='center'>
          <Flex direction='column' align='center' position='relative' >
            <BackpackIcon width='24' height='20' cursor='pointer'/>
            <Flex width='15px' height='15px' justify='center' align='center' right="-3px" top='-5px' position='absolute' style={{backgroundColor: "#86ead4", borderRadius: "var(--radius-3)"}}>
              <Text style={{fontSize: "8px"}}>4</Text>
            </Flex>
            <Text style={{ fontSize: '11px'}} weight='medium'>Cart</Text>
          </Flex>
          <Flex direction='column' align='center' >
            <HeartIcon width='24' height='20' cursor='pointer'/>
            <Text style={{ fontSize: '11px'}} weight='medium'>Favorites</Text>
          </Flex>
        </Flex>
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
      </Flex>
    </Box>
  );
};

export default Bucket;