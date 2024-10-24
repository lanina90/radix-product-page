import {Badge, Button, Flex, Heading, IconButton, Text} from "@radix-ui/themes";
import {nike} from "../../../api/data.ts";
import {HeartIcon, RocketIcon, TriangleDownIcon, TriangleRightIcon, TriangleUpIcon} from "@radix-ui/react-icons";
import SizeSelector from "./SizeSelector.tsx";
import ColorsSelector from "./ColorsSelector.tsx";
import Reviews from "./Reviews.tsx";
import {useProduct} from "../../../store/ProductContext.tsx";
import {useEffect, useState} from "react";


const ProductInfo = () => {
  const {color} = useProduct();
  const [discount, setDiscount] = useState(0);
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (color && nike.colors[color]) {
      const currentDiscount = nike.colors[color].discount || 0;
      setDiscount(currentDiscount);
    }
  }, [color]);

  const priceWithDiscount = discount ? (nike.price * (Number(discount) / 100)) : null;

  return (
    <Flex direction="column" gap='20px' pl="50px">
      <Flex align='center'>
        <svg aria-hidden="true" className="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="32px"
             height="32px" fill="none">
          <path fill="currentColor" fillRule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clipRule="evenodd"></path>
        </svg>
        <Text size='2' weight='medium'>Nike</Text>
      </Flex>
      <Flex direction="column" justify='start' align='start'>
        <Heading as="h2">{nike.name}</Heading>
        <Flex justify='between' width='100%'>
          <Text color='gray' weight='light' size='4'>{nike.gender}</Text>
          <Reviews/>
        </Flex>

        {!priceWithDiscount
          ? <Text color='gray' highContrast size="8" weight='bold' style={{marginTop: "30px"}}>${nike.price}</Text>
          :
          <Flex gap="5px" direction='column'>
            <Flex gap="15px" wrap="wrap">
              <Text color='gray' highContrast size="8" weight='bold' style={{marginTop: "30px"}}>${priceWithDiscount}</Text>
              <Text color='gray' size="8" weight='medium' style={{marginTop: "30px", textDecoration: "line-through"}}>${nike.price}</Text>
              <Badge variant="surface" color="mint" size="3">{discount}% off</Badge>
            </Flex>
            <Text color='mint' size="5" weight='bold'>Use code JUMP25 for an extra 25% off</Text>
          </Flex>
        }

        <ColorsSelector/>
        <SizeSelector/>
        <Flex justify='between' align='center' mt='50px' width="100%">
          <Button size='4' style={{width: "80%", color: "white", cursor: 'pointer'}}>Add to cart</Button>
          <IconButton size='4' color='grey' style={{cursor: 'pointer'}}>
            <HeartIcon width="18" height="18" color='white'/>
          </IconButton>
        </Flex>
        <Flex align="center" gap="5px" mt="12px">
          <RocketIcon/>
          <Text size="1" weight="medium"> Free delivery on orders over $30.00 </Text>
        </Flex>

        <Flex mt="42px" direction='column'>
          <Text as="p" align="left">Carve a new lane for yourself in the Zoom Vomero 5—your go-to for complexity, depth
            and easy styling. The richly layered design includes textiles, leather and plastic accents that come
            together to make one of the coolest sneakers of the season. {!expanded && <TriangleDownIcon viewBox={"0 0 10 11"} width="20px" height="20px"  color="#86EAD5" style={{ cursor: "pointer"}} onClick={() => setExpanded(!expanded)}/>}</Text>
          {expanded &&
          <Flex direction='column' mt="12px" justify="start" align='start' gap="12px">
            <Heading as="h3"> Benefits </Heading>
            <ul>
              <li><TriangleRightIcon/> Synthetic leather on the upper add durability.</li>
              <li><TriangleRightIcon/> Mesh panels and ventilation ports on the heel help keep it light and breathable.</li>
              <li><TriangleRightIcon/> Snappy and responsive, Zoom Air cushioning helps provide a quick-off-the-ground sensation.</li>
              <li><TriangleRightIcon/> Plastic caging on the side helps add support.</li>
              <li><TriangleRightIcon/> Rubber outsole gives you durable traction.</li>
            </ul>
            <Heading as="h3"> Product Details </Heading>
            <ul>
              <li><TriangleRightIcon/> Reflective details</li>
              <li><TriangleRightIcon/> Not intended for use as Personal Protective Equipment (PPE)</li>
            </ul>
            <Heading as="h3"> Zoom Air </Heading>
           <Text align='left'>Snappy and responsive, Zoom Air cushioning helps provide a quick-off-the-ground sensation. It uses stretched tensile fibers knit inside a pressurized Nike Air unit, giving athletes everywhere a chance to find their fast. {expanded && <TriangleUpIcon viewBox={"0 0 10 11"} width="20px" height="20px"  color="#86EAD5" style={{ cursor: "pointer"}} onClick={() => setExpanded(!expanded)}/>}</Text>
          </Flex>
          }
        </Flex>

      </Flex>
    </Flex>
  );
};

export default ProductInfo;