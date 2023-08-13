const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bird extends Model {}

Bird.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }

);

module.exports = Bird;
