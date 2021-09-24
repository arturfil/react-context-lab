import "./App.css";

import { useContext } from "react";
import { FoodContext } from "./context/FoodContext";
import useForm from "./hooks/useForm";

function App() {
  const { foods, setFoods, addFood } = useContext(FoodContext);

  const { foodName, foodType, protein, calories, handleChange, resetForm } =
    useForm({
      foodName: "",
      foodType: "",
      protein: "",
      calories: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      foodName,
      foodType,
      protein,
      calories,
    };
    setFoods([newFood, ...foods]);
    resetForm();
  };

  return (
    <div className="App">
      <h2>Food Tracking</h2>
      <p>Favorite Foods</p>
      <form>
        <input
          onChange={handleChange}
          placeholder="Food Name"
          value={foodName}
          className="form-control"
          type="text"
          name="foodName"
        />
        <input
          onChange={handleChange}
          placeholder="Food Type"
          value={foodType}
          className="form-control"
          type="text"
          name="foodType"
        />
        <input
          onChange={handleChange}
          placeholder="Protein Content"
          value={protein}
          className="form-control"
          type="text"
          name="protein"
        />
        <input
          onChange={handleChange}
          placeholder="Calories Content"
          value={calories}
          className="form-control"
          type="text"
          name="calories"
        />
        <br />
        <button onClick={handleSubmit}>Add Food</button>
        <div>
          {foods &&
            foods.map((food, index) => <div key={index}>{food.foodName}</div>)}
        </div>
      </form>
    </div>
  );
}

export default App;
