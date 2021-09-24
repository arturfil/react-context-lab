import { createContext, useState } from "react";
import data from "../food.json";

export const FoodContext = createContext({});

const FoodProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState(data.foodItems);

  return (
    <FoodContext.Provider
      value={{
        foodItems,
        setFoodItems,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
