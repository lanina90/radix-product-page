import {Flex, RadioCards, Strong, Text} from "@radix-ui/themes";
import {nike} from "../../../api/data.ts";
import {useProduct} from "../../../store/ProductContext.tsx";
import {useEffect} from "react";

const ColorsSelector = () => {
  const colors = Object.keys(nike.colors);
  const { color, setColor } = useProduct();

  const handleColorChange = (value) => {
    setColor(value);
  };

  useEffect(() => {
    if (!color) {
      setColor(colors[0]);
    }
  }, []);

  return (
    <Flex direction='column' width='100%' gap={'10px'} mt="50px">
      <Text align="left"><Strong>Color</Strong> - <span style={{ color: "gray", textTransform: "capitalize"}}>{color}</span></Text>
      <RadioCards.Root
        defaultValue={colors[0]}
        size="2"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 100px)', gap: '10px' }}
        onValueChange={handleColorChange}
      >
        {colors.map((item, index) => {
          const image = nike.colors[item].images[0];
          return (
            <RadioCards.Item value={item} key={index} style={{ width: "100px", height: "100px", padding: 0, cursor: "pointer"}}>
              <Flex width="100%" height="100%" align='center' justify='center'>
                <img
                  src={image}
                  alt="Nike"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                  }}
                />
              </Flex>
            </RadioCards.Item>
          )
        })}
      </RadioCards.Root>
    </Flex>
  );
};

export default ColorsSelector;