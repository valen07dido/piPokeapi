require("dotenv").config();
const { GET } = process.env;
const axios = require("axios");
const { Pokemon } = require("../db");


const GetPokemonByName= async(req,res)=>{
    const name=req.query
}