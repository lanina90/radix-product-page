import {Flex, RadioCards, Strong, Text} from "@radix-ui/themes";
import {useProduct} from "../../../store/ProductContext.tsx";
import {useEffect} from "react";

const SizeSelector = () => {
  const sizes = ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46" ]
  const { size, setSize } = useProduct();

  const handleSizeChange = (value: string) => {
    setSize(value);
  };

  useEffect(() => {
    if (!size) {
      setSize(sizes[0]);
    }
  }, []);

  return (
    <Flex direction='column' width='100%' gap={'10px'} mt="50px">
      <Text align="left"><Strong>Size</Strong> - <span style={{ color: "gray"}}>EU</span></Text>
      <RadioCards.Root
        defaultValue={sizes[0]}
        size="1"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 80px)', gap: '10px' }}
        onValueChange={handleSizeChange}
      >
        {sizes.map((item, index) => (
          <RadioCards.Item value={item} key={index} style={{ cursor: "pointer"}} >
            <Flex width="100%" align='center' justify='center'>
              <Text weight="regular">{item}</Text>
            </Flex>
          </RadioCards.Item>
        ))}
      </RadioCards.Root>
    </Flex>
  );
};

export default SizeSelector;