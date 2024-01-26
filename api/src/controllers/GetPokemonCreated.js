 const getCharbyBDD = require('./auxiliares/getCharbyBDD')
const GetPokemonCreated=async(req,res)=>{
try {
    const pokemons= await getCharbyBDD()
    return res.status(200).json(pokemons)
} catch (error) {
    res.status(400).json({error:error.message})
}
}

module.exports=GetPokemonCreated