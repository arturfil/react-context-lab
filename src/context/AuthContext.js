import { createContext, useState } from "react";
import data from "../food.json";

export const FoodContext = createContext({});

const FoodProvider = ({ children }) => {
  const [food, setFood] = useState(data.foodItems);

  //Provider
  return (
    <FoodContext.Provider
      value={{
        food,
        setFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
