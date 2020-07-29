'use strict';

import dateFormat from 'dateformat'

module.exports = {
  up: (queryInterface, Sequelize) => {
    let currentDate = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
    return queryInterface.sequelize.query(`
      INSERT INTO entities(name, description, status, color, createdAt, updatedAt)
      VALUES (
        '3PM',
        'DHIS 2 lets you manage aggregate data with a flexible data model and advanced visualization features',
        'INACTIVE',
        'blue',
        '${currentDate}',
        '${currentDate}'
      );
    `)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DELETE FROM entities WHERE name = '3PM';`)
  }
};
