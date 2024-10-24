import {useProduct} from "../../store/ProductContext.tsx";
import {useEffect, useState} from "react";
import {nike} from "../../api/data.ts";
import {Flex} from "@radix-ui/themes";


const ProductSlider = () => {
  const {color} = useProduct();
  const [currentImage, setCurrentImage] = useState<string>("white");
  const images = nike.colors[color]?.images || [];

  useEffect(() => {
    setCurrentImage(images[0])
  }, [color]);

  return (
    <Flex width="100%" gap="20px" position="sticky" top="100px" maxHeight="700px">
      <Flex gap="10px" marginTop="10px" direction='column'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onMouseEnter={() => setCurrentImage(image)}
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              cursor: 'pointer',
              border: currentImage === image ? '2px solid blue' : 'none',
            }}
          />
        ))}
      </Flex>

      <Flex>
        <img
          src={currentImage}
          alt="Product"
          style={{width: '100%', height: 'auto', maxHeight: "700px", objectFit: 'cover'}}
        />
      </Flex>
    </Flex>
  );
};

export default ProductSlider;