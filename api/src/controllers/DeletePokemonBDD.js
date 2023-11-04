const { Pokemon } = require("../db");
const DeletePokemonBDD = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    await Pokemon.destroy({ where: { id } });
    res.status(200).send('Pokemon eliminado exitosamente');
  } catch (error) {
    res.status(500).json({error:error.message})
  }
};

module.exports=DeletePokemonBDD
