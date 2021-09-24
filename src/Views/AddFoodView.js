import { Form, Button } from "react-bootstrap";
import "../style/AddFoodView.css";
import { useContext } from "react";
import { FoodContext } from "../context/AuthContext";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AddFoodView = () => {
  const { food, setFood } = useContext(FoodContext);
  const history = useHistory()
  const { foodName, protein, calories, sideItem, dressingItem, handleChange ,resetForm } =
    useForm({
      foodName: "",
      protein: "",
      calories: "",
      sideItem: "",
      dressingItem: "",
    });


  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      foodName,
      protein,
      calories,
      sideItem,
      dressingItem,
    };
    setFood([newFood,...food,]);
    resetForm();
    alert("Food created Succesfully. Check the table.");
  };

  const push = () => {
    history.push('/')
  }

  return (
    <section className="dark">
      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Label className="formtext">Food Name: </Form.Label>
          <Form.Control
            onChange={handleChange}
            name="foodName"
            type="text"
            placeholder="Food Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formtext">Protein</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="protein"
            type="text"
            placeholder="Protein"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="formtext">Calories</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="calories"
            type="text"
            placeholder="Protein"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="formtext">Side</Form.Label>
          <Form.Select
            onChange={handleChange}
            className="mb-3"
            name="sideItem"
            aria-label="Default select example"
          >
            <option>Comes with a side?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label className="formtext">Dressing</Form.Label>
          <Form.Select
            onChange={handleChange}
            className="mb-3"
            name="dressingItem"
            aria-label="Default select example"
          >
            <option>Comes with dressing?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={handleSubmit}>
        Add Food
      </Button>
      <Button onClick={push}>
        Table
      </Button>
    </section>
  );
};

export default AddFoodView;
