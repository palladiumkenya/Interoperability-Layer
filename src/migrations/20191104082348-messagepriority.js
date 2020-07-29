'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('MessageTypes').then(tableDesc => {
      if (tableDesc.priority) {
        return Promise.resolve()
      } else {
        return queryInterface.addColumn('MessageTypes', 'priority', {
          type: Sequelize.DataTypes.ENUM('1', '2', '3'),
          allowNull: true
        })
      }
    })
  },

  down: (queryInterface, Sequelize) => {}
}
