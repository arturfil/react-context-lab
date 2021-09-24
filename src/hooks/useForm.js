import {useState} from 'react'

export const useForm = (obj) => {
  const [state, setState] = useState(obj);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name] : [event.target.value]
    })
  }
  const resetForm = () => {
    setState(obj);
  }
  return{
    ...state,
    resetForm,
    handleChange
  }
}

