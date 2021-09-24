import "./App.css";
import { useContext } from "react";
import { FoodContext } from "./FoodContext";
import useForm from "./useForm";

const object = {
  foodName: "",
  foodType: "",
  protein: "",
  calories: "",
};

function App() {
  const { foodItems, setFoodItems } = useContext(FoodContext);
  const { foodName, foodType, protein, calories, handleChange, resetForm } =
    useForm(object);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      foodName: foodName,
      foodType: foodType,
      protein: protein,
      calories: calories,
    };

    setFoodItems([newFood, ...foodItems]);
    resetForm();
  };
  return (
    <div>
      <form>
        <input
          name="foodName"
          type="text"
          placeholder="Enter Food Name"
          value={foodName}
          onChange={handleChange}
        />
        <input
          name="foodType"
          type="text"
          placeholder="Enter Food Type"
          value={foodType}
          onChange={handleChange}
        />
        <input
          name="protein"
          type="text"
          placeholder="Enter Protein"
          value={protein}
          onChange={handleChange}
        />
        <input
          name="calories"
          type="text"
          placeholder="Enter Calories"
          value={calories}
          onChange={handleChange}
        />
        <button onClick={onSubmit}>submit</button>
      </form>

      <div>
        {foodItems.map((foodItem, idx) => {
          return <div key={idx}> {foodItem.foodName} </div>;
        })}
      </div>
    </div>
  );
}

export default App;
