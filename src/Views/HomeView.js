import { useContext } from "react";
import { FoodContext } from "../context/AuthContext";
import { Button, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const HomeView = () => {
  const {food, setFood} = useContext(FoodContext);
  console.log(food)
  const history = useHistory()
  
  const push = () => {
    history.push('/addfood')
  }

  return (
<>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Food Name</th>
      <th>Calories</th>
      <th>Protein</th>
      <th>Side </th>
      <th>Dressing</th>
    </tr>
  </thead>
  <tbody>
    {food.map(singleFood => (
      <tr>
      <td key={singleFood._id}>{food.indexOf(singleFood) + 1 }</td>
      <td>{singleFood.foodName}</td>
      <td>{singleFood.calories}</td>
      {!singleFood.protein ? (
        <td>None</td>
      ):(
      <td>{singleFood.protein}</td>
      )}
      {!singleFood.sideItem ? (
        <td>No</td>
      ):(
      <td>Yes</td>
      )}
      {!singleFood.dressingItem ? (
        <td>No</td>
      ):(
      <td>Yes</td>
      )}
      </tr>
    ))}
  </tbody>
</Table>
        <Button onClick={push}>Hello</Button>
    </>
    
  )
}

export default HomeView;