import {createContext, useContext, useState} from "react";

interface IProductContext {
  size: string,
  color: string,
  setColor: (value: (((prevState: string) => string) | string)) => void,
  setSize: (value: (((prevState: string) => string) | string)) => void,
}

const ProductContext = createContext<IProductContext>({} as IProductContext);

export const ProductProvider = ({children}) => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  return (
    <ProductContext.Provider value={{color, setColor, size, setSize}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};