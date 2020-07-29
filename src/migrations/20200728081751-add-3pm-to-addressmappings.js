'use strict';

import dateFormat from 'dateformat'

module.exports = {
  async up(queryInterface, Sequelize) {
    const entityIds = await queryInterface.sequelize.query(`SELECT id FROM entities WHERE name = '3PM';`, { type: Sequelize.QueryTypes.SELECT });
    if(entityIds.length > 0) {
      let currentDate = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
      return queryInterface.sequelize.query(`
        INSERT INTO addressmappings(protocol, address, status, createdAt, updatedAt, EntityId)
        VALUES (
            'HTTP',
            'https://3pm-test.globalhealthapp.net/dhis/api/dataValueSets?orgUnitIdScheme=code&importStrategy=CREATE_AND_UPDATE&dryRun=false&datasetAllowsPeriods=true&strictOrganisationUnits=true&strictPeriods=true',
            'ACTIVE',
            '${currentDate}',
            '${currentDate}',
            ${entityIds[0].id}
        );
      `)
    } else {
      return Promise.resolve();
    }
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`DELETE FROM addressmappings WHERE description IN ('3PM Username', '3PM Password');`)
  }
};
