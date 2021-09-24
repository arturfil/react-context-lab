import { useState } from "react";

const useForm = (object) => {
  const [state, setState] = useState(object);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setState(object);
  };

  return { ...state, handleChange, resetForm };
};

export default useForm;
