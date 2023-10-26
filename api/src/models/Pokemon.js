const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
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
