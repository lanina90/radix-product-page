import {Flex, Link} from "@radix-ui/themes";
import {SlashIcon} from "@radix-ui/react-icons";

const breadcrumbs = ["Clothes and shoes", "Shoes", "Nike"]


const BreadCrumbs = () => {
  return (
    <Flex>
      {breadcrumbs.map((item, index) => (
        <Flex align='center' key={index}>
          <Link
            color='gray'
            key={index}
            style={{ cursor: "pointer"}}>
            {item}
          </Link>
          {index !== breadcrumbs.length - 1 && <SlashIcon color='gray'/>}
        </Flex>
      ))}
    </Flex>
  );
};

export default BreadCrumbs;