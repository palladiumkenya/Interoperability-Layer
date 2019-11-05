'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('MessageTypes', 'priority', {
      type: Sequelize.ENUM(1, 2, 3),
      allowNull: true
    }).then(() => {
      return queryInterface.sequelize.query(`
        update MessageTypes set priority = 1 where name = 'ADT^A04';
        update MessageTypes set priority = 1 where name = 'ADT^A08';
        update MessageTypes set priority = 1 where name = 'RDE^001';
        update MessageTypes set priority = 1 where name = 'RDS^O13';
        update MessageTypes set priority = 2 where name = 'SIU^S12';
        update MessageTypes set priority = 3 where name = 'ORM^O01';
        update MessageTypes set priority = 2 where name = 'ORU^R01';
        update MessageTypes set priority = 2 where name = 'MOH731^ADX';
        update MessageTypes set priority = 3 where name = 'ORU^VL';
      `)
    })
  },

  down: (queryInterface, Sequelize) => {}
}
