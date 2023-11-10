import { useEffect } from "react";
import { useLocation } from "react-router";
import { clearChar, getById } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Detail = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();
  const dispatch = useDispatch();
  let Pokemon = useSelector((state) => state.SearchPokemon);
    console.log(Pokemon)
  useEffect(() => {
    dispatch(getById(id));
    return()=>{
       dispatch(clearChar())
    }
  }, []);
  return <div>
    {Pokemon&&Pokemon.length!==0?(
        <div>

        <h3>ID:{Pokemon.id}</h3>
        <h3>Nombre:{Pokemon.name}</h3>
        <img src={Pokemon.image} alt={Pokemon.name} />
        <h3>Nivel de vida:{Pokemon.vida}</h3>
        <h3>Poder de ataque:{Pokemon.ataque}</h3>
        <h3>Nivel de defensa:{Pokemon.defensa}</h3>
        <h3>Nivel de velocidad:{Pokemon.velocidad}</h3>
        <h3>Altura:{Pokemon.height}</h3>
        <h3>Peso:{Pokemon.weight}</h3>
        {Pokemon.tipos&&Pokemon.tipos.map((tipo, index) => {
        return <h3 key={index}>Tipo:{tipo}</h3>
      })}
        </div>
    ):<h2>cargando...</h2>}
    </div>
}


export default Detail;
