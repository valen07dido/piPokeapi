import { useState } from "react";
import validator from "./validator";
import { createChar } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router'
import styles from './Form.module.css'
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
      dispatch(createChar(Pokemon));
      window.alert('pokemon creado exitosamente')
      navigate('/home')
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
    <div className={styles.container}>
      <h1 className={styles.titulo}>Crea tu pokemon😁</h1>
      <form onSubmit={handleSubmit} className={styles.formu}>
        <label htmlFor="" className={styles.etiqueta}>Nombre:</label>
        <input
          type="text"
          onChange={handleChange}
          value={Pokemon.name}
          name="name"
          className={styles.text}
          placeholder='ingrese un nombre'
        />
        {errors.e1?(
          <p>{errors.e1}</p>
        ):errors.e2?(
          <p>{errors.e2}</p>
        ):(
          <p>{errors.e3}</p>
        )}
        <label htmlFor="" className={styles.etiqueta}>Vida:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.hp}
          name="hp"
          className={styles.text}
          placeholder='ingrese un numero'

        />
        {
          errors.e5?(
            <p>{errors.e5}</p>
            ):(<p>{errors.e12}</p>)
        }
        <label htmlFor="" className={styles.etiqueta}>Ataque:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.attack}
          name="attack"
          className={styles.text}
          placeholder='ingrese un numero'

        />
         {
          errors.e6?(
            <p>{errors.e6}</p>
            ):(<p>{errors.e13}</p>)
        }
        <label htmlFor="" className={styles.etiqueta}>Defensa:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.defense}
          name="defense"
          className={styles.text}
          placeholder='ingrese un numero'
          
        />
         {
          errors.e7?(
            <p>{errors.e7}</p>
            ):(<p>{errors.e14}</p>)
        }
        <label htmlFor="" className={styles.etiqueta}>Velocidad:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.speed}
          name="speed"
          className={styles.text}
          placeholder='ingrese un numero'

        />
         {
          errors.e8?(
            <p>{errors.e8}</p>
            ):(<p>{errors.e15}</p>)
        }
        <label htmlFor="" className={styles.etiqueta}>Altura:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.height}
          name="height"
          className={styles.text}
          placeholder='ingrese un numero'

        />
         {
          errors.e4?(
            <p>{errors.e4}</p>
            ):(<p>{errors.e17}</p>)
        }
        <label htmlFor="" className={styles.etiqueta}>Peso:</label>
        <input
          type="number"
          onChange={handleChange}
          value={Pokemon.weight}
          name="weight"
          className={styles.text}
          placeholder='ingrese un numero'

        />
        {
          errors.e9?(
            <p>{errors.e9}</p>
            ):(<p>{errors.e16}</p>)
        }
        <label htmlFor="" className={styles.etiqueta}>tipos:</label>
        
        <input
          type="text"
          onChange={handleChange}
          value={Pokemon.type}
          name="type"
          className={styles.text}
          placeholder='tipos ej:"agua,fuego"'

        />
        {
          errors.e10?(
            <p>{errors.e10}</p>
            ):(<p>{errors.e11}</p>)
        }
        <label htmlFor="" className={styles.etiqueta}>seleccione una imagen📷:</label>
        <input
          type="text"
          onChange={handleChange}
          value={Pokemon.image}
          name="image"
          className={styles.text}
          placeholder='ingrese una URL'

        />
        {
          errors.e18?(
            <p>{errors.e18}</p>
            ):null
        }
        <button className={styles.boton}>Crear Pokemon</button>
      </form>
    </div>
  );
};

export default Form;
