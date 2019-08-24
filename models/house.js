'use strict';
module.exports = (sequelize, DataTypes) => {
  const house = sequelize.define('house', {
    house_name: DataTypes.STRING,
    type: DataTypes.STRING,
    cartegory: DataTypes.STRING,
    room: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    lat: DataTypes.DOUBLE,
    long: DataTypes.DOUBLE,
    photo: DataTypes.STRING,
    description: DataTypes.TEXT,
    wc: DataTypes.BOOLEAN,
    wifi: DataTypes.BOOLEAN,
    keyRoom: DataTypes.BOOLEAN,
    bed: DataTypes.BOOLEAN,
    electric: DataTypes.BOOLEAN,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    vilage: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  house.associate = function(models) {
    // associations can be defined here
    house.belongsTo(models.user)
  };
  return house;
};