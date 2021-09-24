import { createContext, useState } from "react";
import data from "../food.json";

export const FoodContext = createContext({});

const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState(data.foodItems);

  console.log(foods);

  const addFood = (object) => {
    setFoods([...foods, object]);
  };

  return (
    <FoodContext.Provider value={{ foods, setFoods, addFood }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
