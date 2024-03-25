import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.mockfly.dev/mocks/2145d12c-d27b-4540-801c-f2040c33c811/products")
      .then((result) => {
        setProducts(result.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <ProductsContext.Provider value={{ products,isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
