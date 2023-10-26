const { Pokemon } = require("../../db");

const getByIdBDD=async(id)=>{
    try {
        const pokemon = await Pokemon.findByPk(id);
        if (!pokemon) {
          return res.status(404).json({ error: "Pokemon no encontrado" });
        }
        return res.status(200).json(pokemon);
      } catch (Error) {
        return res.status(500).json({ error: Error.message });
      }
}
module.exports=getByIdBDD