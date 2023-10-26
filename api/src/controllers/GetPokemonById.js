require("dotenv").config();
const { GET } = process.env;
const axios = require("axios");
const { Pokemon } = require("../db");

// const GetPokemonById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { data } = await axios(`${GET}${id}`);
//     const { name, height, types, sprites, stats, weight } = data;
//     //preparamos el objeto para enviarlo sin data que no nos sirva
//     const img = sprites.other["official-artwork"].front_default;
//     // const img = sprites.other.home.front_default;

//     const type = types[0].type.name;
//     //extraigo todas las estadisticas y las guardo en un objeto principal
//     let estadisticas = stats.reduce((obj, estadistica) => {
//       obj[estadistica.stat.name] = estadistica.base_stat;
//       return obj;
//     }, {});
//     //defino las stats pedidas en el PI
//     // console.log(estadisticas);
//     const vida = estadisticas.hp;
//     const ataque = estadisticas.attack;
//     const defensa = estadisticas.defense;
//     const velocidad = estadisticas.speed;

//     const pokemon = {
//       name,
//       height,
//       type,
//       img,
//       vida,
//       ataque,
//       defensa,
//       velocidad,
//       weight,
//     };

//     if (!pokemon) {
//       return res.status(404).json({ error: "personaje no encontrado" });
//     }
//     return res.status(200).json(pokemon);
//   } catch (error) {
//     //!en caso de no encontrar ninguno en la api va a buscar a la base de datos
//     try {
//       const { id } = req.params;
//       const pokemon = await Pokemon.findByPk(id);
//       if (!pokemon) {
//         return res.status(404).json({ error: "Pokemon no encontrado" });
//       }
//       return res.status(200).json(pokemon);
//     } catch (dbError) {
//       return res.status(500).json({ error: dbError.message });
//     }
//   }
// };

// module.exports = GetPokemonById;

const GetPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id.length>5) {
      try {
        const pokemon = await Pokemon.findByPk(id);
        if (!pokemon) {
          return res.status(404).json({ error: "Pokemon no encontrado" });
        }
        return res.status(200).json(pokemon);
      } catch (dbError) {
        return res.status(500).json({ error: dbError.message });
      }
    } else  {
      const { data } = await axios(`${GET}${id}`);
      const { name, height, types, sprites, stats, weight } = data;
      //preparamos el objeto para enviarlo sin data que no nos sirva
      const img = sprites.other["official-artwork"].front_default;
      // const img = sprites.other.home.front_default;

      const type = types[0].type.name;
      //extraigo todas las estadisticas y las guardo en un objeto principal
      let estadisticas = stats.reduce((obj, estadistica) => {
        obj[estadistica.stat.name] = estadistica.base_stat;
        return obj;
      }, {});
      //defino las stats pedidas en el PI
      // console.log(estadisticas);
      const vida = estadisticas.hp;
      const ataque = estadisticas.attack;
      const defensa = estadisticas.defense;
      const velocidad = estadisticas.speed;

      const pokemon = {
        name,
        height,
        type,
        img,
        vida,
        ataque,
        defensa,
        velocidad,
        weight,
      };

      if (!pokemon) {
        return res.status(404).json({ error: "personaje no encontrado" });
      }
      return res.status(200).json(pokemon);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = GetPokemonById;
