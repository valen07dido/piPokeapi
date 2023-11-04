import { useState } from "react";
import validator from "./validator";
import { createChar } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router'
const Form = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [Pokemon, setPokemon] = useState({
    name: "",
    height: "",
    type: [],
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    if (event.target.name === "type") {
      setErrors(
        validator({
          ...Pokemon,
          [event.target.name]: event.target.value.split(","),
        })
      );
      setPokemon({
        ...Pokemon,
        [event.target.name]: event.target.value.split(","),
      });
    } else {
      setErrors(
        validator({ ...Pokemon, [event.target.name]: event.target.value })
      );  
      setPokemon({ ...Pokemon, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      console.log('creado')
      dispatch(createChar(Pokemon));
      navigate('/create')
      setPokemon({
        name: "",
        height: "",
        type: [],
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        weight: "",
        image: "",
      });
    }else{
      window.alert('complete los datos de forma correcta')
    }
  };
  return (
    <div>
      <h1>Crea tu pokemon😁</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          onChange={handleChange}
          value={Pokemon.name}
          name="name"
        />
        <label htmlFor="">Vida:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.hp}
          name="hp"
        />
        <label htmlFor="">Ataque:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.attack}
          name="attack"
        />
        <label htmlFor="">Defensa:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.defense}
          name="defense"
        />
        <label htmlFor="">Velocidad:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.speed}
          name="speed"
        />
        <label htmlFor="">Altura:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.height}
          name="height"
        />
        <label htmlFor="">Peso:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.weight}
          name="weight"
        />
        <label htmlFor="">tipos:</label>
        <input
          type="text"
          onChange={handleChange}
          value={Pokemon.type}
          name="type"
        />
        <label htmlFor="">seleccione una imagen📷:</label>
        <input
          type="file"
          onChange={handleChange}
          value={Pokemon.image}
          name="image"
        />
        <button>Crear Pokemon</button>
      </form>
    </div>
  );
};

export default Form;
