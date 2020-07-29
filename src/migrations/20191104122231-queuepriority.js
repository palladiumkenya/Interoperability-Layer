'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('queue').then(tableDesc => {
      if (tableDesc.priority) {
        return Promise.resolve()
      } else {
        return queryInterface.addColumn('queue', 'priority', {
          type: Sequelize.DataTypes.ENUM('1', '2', '3'),
          allowNull: true
        });
      }
    });
  },

  down: (queryInterface, Sequelize) => {}
}
