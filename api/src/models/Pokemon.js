const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Pokemon", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ataque:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    defensa:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    velocidad:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    altura:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    peso:{
      type:DataTypes.INTEGER,
      allowNull:false,
    }
  });
};
