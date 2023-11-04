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
    {Pokemon?(
        <div>

        <h3>{Pokemon.id}</h3>
        <h3>{Pokemon.name}</h3>
        <img src={Pokemon.image} alt={Pokemon.name} />
        <h3>{Pokemon.vida}</h3>
        <h3>{Pokemon.ataque}</h3>
        <h3>{Pokemon.defensa}</h3>
        <h3>{Pokemon.velocidad}</h3>
        <h3>{Pokemon.altura}</h3>
        <h3>{`${Pokemon.weight}kg`}</h3>
        {Pokemon.tipos&&Pokemon.tipos.map((tipo, index) => {
        return <h3 key={index}>{tipo}</h3>;
      })}
        </div>
    ):console.log('si')}
  </div>;
};

export default Detail;
