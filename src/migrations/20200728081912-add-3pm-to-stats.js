'use strict';

import dateFormat from 'dateformat'

module.exports = {
  up: (queryInterface, Sequelize) => {
    let currentDate = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
    return queryInterface.sequelize.query(`
      INSERT INTO stats(name, value, description, createdAt, updatedAt)
      VALUES
        ('3PM_STATUS', 'offline', '', '${currentDate}', '${currentDate}'),
        ('3PM_ADX_MESSAGETYPE', '0', '', '${currentDate}', '${currentDate}');
    `)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DELETE FROM stats WHERE name IN ('3PM_STATUS', '3PM_ADX_MESSAGETYPE');`)
  }
};
