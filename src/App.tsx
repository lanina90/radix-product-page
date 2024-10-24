
import './App.css'
import Header from "./components/Header/Header.tsx";
import Product from "./components/Product/Product.tsx";
import {ProductProvider} from "./store/ProductContext.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

  return (
   <ProductProvider>
     <Header/>
     <Product/>
     <Footer/>
   </ProductProvider>
  )
}

export default App
