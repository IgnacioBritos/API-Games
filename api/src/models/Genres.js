const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Genres', {
      id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
      },
      platafoms:{
        type:DataTypes.STRING,
        allowNull:false,
      },
    },{ timestamps: false });
  };