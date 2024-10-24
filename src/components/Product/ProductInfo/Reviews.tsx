import {Box, Flex, Text} from "@radix-ui/themes";
import {StarFilledIcon} from "@radix-ui/react-icons";

const Reviews = () => {
  return (
    <Flex align='center' gap={"10px"}>
      <Box>
        {Array.from({length: 5}).map((_, index) => (
          <StarFilledIcon key={index} color="#efef31"/>
        ))}
      </Box>
      <Text color="gray" size='1'>43 Reviews</Text>
    </Flex>
  );
};

export default Reviews;