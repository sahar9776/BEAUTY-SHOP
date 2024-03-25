import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

const CategoryProvidr = ({ children }) => {
    const [category,setCategory]=useState([]);
    useEffect(()=>{
        axios.get("https://api.mockfly.dev/mocks/2145d12c-d27b-4540-801c-f2040c33c811/categories").then(result=>{
            setCategory(result.data.data);
        })
    },[])
  return <CategoryContext.Provider value={{category}} >{children}</CategoryContext.Provider>;
};

export default CategoryProvidr