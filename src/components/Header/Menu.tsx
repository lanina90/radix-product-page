import {Box, Flex, Link} from "@radix-ui/themes";


const menu = ["Women", "Man", "Kids", "Sports", "Brands", "New"]
const Menu = () => {

  return (
    <Box>
      <Flex gap='20px'>
        {menu.map((item, index) => (
          <Link
            key={index}
            color='gray'
            weight='medium'
            highContrast
            style={{cursor: 'pointer'}}
          >
            {item}
          </Link>
        ))}
        <Link color='tomato' weight='medium' >Sale</Link>
      </Flex>
    </Box>
  );
};

export default Menu;