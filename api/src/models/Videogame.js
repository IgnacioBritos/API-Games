const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    genres:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false,
    },
    released:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    rating:{
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    image:{
      type:DataTypes.STRING,
      validator:{
        isUrl: true,
      }
    },
    description:{
      type:DataTypes.STRING,
    }
  },{ timestamps: false });
};


