const {Type} = require('../db')

const PostType=async(req,res)=>{
    const {nombre}=req.body
    console.log(nombre)
    try {
        if(nombre){
             await Type.create({nombre})  
            res.status(200).send('tipo creado exitosamente') 
        }else{
            res.status(400).send('no existe un valor de tipo')
        }
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

}

module.exports=PostType