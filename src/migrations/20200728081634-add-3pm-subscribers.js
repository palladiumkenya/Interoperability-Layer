'use strict';

import dateFormat from 'dateformat'

module.exports = {
  async up(queryInterface, Sequelize) {
    const entityIds = await queryInterface.sequelize.query(`SELECT id FROM entities WHERE name = '3PM';`, { type: Sequelize.QueryTypes.SELECT });
    const messageTypeIds = await queryInterface.sequelize.query(`SELECT id as id FROM messagetypes WHERE name = '3PM^ADX';`, { type: Sequelize.QueryTypes.SELECT });
    if(entityIds.length > 0 && messageTypeIds.length) {
      let currentDate = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
      return queryInterface.sequelize.query(`
        INSERT INTO subscribers(status, EntityId, MessageTypeId, createdAt, updatedAt)
        VALUES ('ACTIVE', ${entityIds[0].id}, ${messageTypeIds[0].id}, '${currentDate}', '${currentDate}');
      `)
    } else {
      return Promise.resolve();
    }
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`DELETE FROM subscribers WHERE description IN ('3PM Username', '3PM Password');`)
  }
};
