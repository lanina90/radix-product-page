import {Box, Grid, Section} from "@radix-ui/themes";
import BreadCrumbs from "./BreadCrumbs.tsx";
import ProductSlider from "./ProductSlider.tsx";
import ProductInfo from "./ProductInfo/ProductInfo.tsx";

const Product = () => {
  return (
    <Section style={{margin: "auto"}} px="5" maxWidth="1440px">
      <BreadCrumbs/>
      <Box mt="50px"  >
        <Grid style={{ gridTemplateColumns: 'repeat(auto-fit, 50%)' }} width="auto" position="relative" height="100%" >
          <ProductSlider/>
          <ProductInfo/>
        </Grid>
      </Box>
    </Section>
  );
};

export default Product;