const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING, //Cadena string
      allowNull: false, // No puede estar vacio
      primaryKey: true, // Llave primaria
      unique: true //no puede repetirse
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type:DataTypes.INTEGER, //numeros enteros
      allowNull: false,
    },
    population: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {timestamps: false});
};
