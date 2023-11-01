const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Band extends Model {}

Band.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Band',
  }
);

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db'); 

class Musician extends Model {}

Musician.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instrument: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Musician',
  }
);

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Song extends Model {}

Song.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Song',
  }
);




module.exports = {
    Band,
    Musician,
    Song
};
