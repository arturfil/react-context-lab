import { createContext, useState, useEffect } from "react";
import {foodItems} from '../food.json'

export const FoodContext = createContext({});

const FoodProvider = ({ children }) => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    setFood(foodItems)
  },[]);
 
  const addFood = async (obj) => {
      setFood([...food], obj)
  }
  
return (
    <FoodContext.Provider value={{
        food,
        setFood,
        addFood
    }}>
        {children}
    </FoodContext.Provider>
) 
}
export default FoodProvider 
