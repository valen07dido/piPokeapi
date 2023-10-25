require("dotenv").config();
const { URL_BASE } = process.env;
const axios = require("axios");

const GetAllPokemons=async (req, res)=>{
    try {
        const {data}=await axios(URL_BASE)
        if(data){
            return res.status(201).json(data.results)
        }
       return res.status(404).json({error:'no hay personajes'})
    } catch (error) {
       return res.status(400).json({error:error.message})
    }
}


module.exports=GetAllPokemons