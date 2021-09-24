import "./App.css";
import { FoodContext } from "./context/FoodContext";
import { useContext, useState } from "react";

function App() {
  const { food, setFood } = useContext(FoodContext);

  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("")
  const [protein, setProtein] = useState("");
  const [calories, setCalories] = useState("");

  
  
  const addFoodInList = (e) => {
    e.preventDefault()
      const newFood = {
        foodName,
        foodType,
        protein,
        calories
      }
      console.log(newFood)
      setFood([...food, newFood])
      setFoodName("")
      setFoodType("")
      setProtein("")
      setCalories("")
  }

  return (
    <>
      <form onSubmit={addFoodInList}>
        <input
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="food name"
          value={foodName}
          type="text"
        />
        <input
          onChange={(e) => setFoodType(e.target.value)}
          placeholder="food type"
          value={foodType}
          type="text"
        />
        <input
          onChange={(e) => setProtein(e.target.value)}
          placeholder="protein"
          value={protein}
          type="text"
        />
        <input
          onChange={(e) => setCalories(e.target.value)}
          placeholder="calories"
          value={calories}
          type="number"
        />
        <button type="submit">
          Add
        </button>
      </form>

      <div>
   
        {food.map((oneFood, i) => {
          return <h4 key={i}>{oneFood.foodName} </h4>;
        })}
      </div>
    </>
  );
}

export default App;
