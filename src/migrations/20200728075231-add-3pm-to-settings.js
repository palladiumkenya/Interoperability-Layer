'use strict';

import dateFormat from 'dateformat'

module.exports = {
  up: (queryInterface, Sequelize) => {
    let currentDate = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
    return queryInterface.sequelize.query(`
      INSERT INTO settings(value, description, isUpdatable, display, createdAt, updatedAt)
      VALUES (null, '3PM Username', '1', '1', '${currentDate}', '${currentDate}'), (null, '3PM Password', '1', '1', '${currentDate}', '${currentDate}');
    `)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DELETE FROM settings WHERE description IN ('3PM Username', '3PM Password');`)
  }
};
