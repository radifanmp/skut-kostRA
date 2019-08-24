'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('houses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      house_name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      cartegory: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      lat: {
        type: Sequelize.DOUBLE
      },
      long: {
        type: Sequelize.DOUBLE
      },
      photo: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      wc: {
        type: Sequelize.BOOLEAN
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      keyRoom: {
        type: Sequelize.BOOLEAN
      },
      bed: {
        type: Sequelize.BOOLEAN
      },
      electric: {
        type: Sequelize.BOOLEAN
      },
      province: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      vilage: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('houses');
  }
};