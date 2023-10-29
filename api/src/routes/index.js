const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const GetAllPokemons=require ('../controllers/GetAllPokemons')
const GetPokemonById=require('../controllers/GetPokemonById')
const PostPokemon=require('../controllers/PostPokemon')
const GetAllTypes=require('../controllers/GetAllTypes')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/types',GetAllTypes)
router.get('/',GetAllPokemons)
router.get('/:id',GetPokemonById)
router.post('/',PostPokemon)



module.exports = router;
