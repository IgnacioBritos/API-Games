const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Plataformas:{
    //   type:DataTypes.STRING,
    //   allowNull:false,
    // },
    released:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    rating:{
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    background_image:{
      type:DataTypes.STRING,
      validator:{
        isUrl: true,
      }
    }
    

  },{ timestamps: false });
};

