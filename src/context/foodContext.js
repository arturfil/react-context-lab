import { createContext, useState, useEffect } from "react";
import intialState from '../food.json';


export const foodContext = createContext({});

const FoodContext = ({children}) => {
  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
    const foodList = intialState.foodItems
    setFoods(foodList);
    return foods
  }

  const addFood = async (food) => {
    setFoods(foods.append(food));
    return foods
  }

  return (
    <foodContext.Provider
      value={{
        getFoods,
        addFood
      }}
    >
      {children}
    </foodContext.Provider>
  )
};

export default FoodContext