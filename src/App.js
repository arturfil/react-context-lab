import { useState, useContext, useEffect } from "react";
import { foodContext } from "./context/foodContext";



const App = () => {
  
  const { getFoods, addFood } = useContext(foodContext);

  const [foods, setFoods] = useState([]);
  const [food, setFood] = useState({
    foodName: "",
    foodType: "",
    protein: "",
    calories: "",
  });


  useEffect(() => {
    setFoods(getFoods())
  }, []);

  const handleChange = (event) => {
    setFood({
      ...food,
      [event.target.name]: event.target.value,
    });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    setFoods(addFood(food))
  };

  return (
    <>
      <div>
        <form className="form">
          <h2>Food</h2>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="Name"
            name="foodName"
          />
          <br />
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="Type"
            name="foodType"
          />
          <br />
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="Protein"
            name="protein"
          />
          <br />
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="Calories"
            name="calories"
          />
          <br />
          <button
            onClick={submitLogin}
            className="btn btn-primary form-control"
          >
            Submit
          </button>
        </form>
      </div>

      <ul>
        {foods.map((foodItem) => (
          <>
          <li key={foodItem._id}>{foodItem.foodName} is a {foodItem.foodType} with {foodItem.protein} that has {foodItem.calories} calories</li>
          <br/>
          </>
        ))}
      </ul>
    </>
  );
};

export default App;
