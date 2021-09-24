import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const Home = () => {
  const { foodItems, setFoodItems } = useContext(FoodContext);

  return (
    <div>
      {foodItems.map((foodItem) => (
        <tr>{foodItem.foodName}</tr>
      ))}
    </div>
  );
};

export default Home;
