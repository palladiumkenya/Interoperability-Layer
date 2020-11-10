'use strict';

import models from '../models'

module.exports = {
  async up (queryInterface, Sequelize) {
    const entity = await models.Entity.findOne({ where: { name: 'PPPM' }});
    if (entity.id) {
      return await models.AddressMapping.create({
        EntityId: entity.id,
        protocol: 'HTTP',
        address: 'https://3pm-test.globalhealthapp.net/dhis/api/dataValueSets?orgUnitIdScheme=code&importStrategy=CREATE_AND_UPDATE&dryRun=false&datasetAllowsPeriods=true&strictOrganisationUnits=true&strictPeriods=true',
        status: 'ACTIVE'
      });
    } else {
      return Promise.reject();
    }
  },

  async down (queryInterface, Sequelize) {
    const entity = await models.Entity.findOne({ where: { name: 'PPPM' }});
    if (entity.id) {
      return await models.AddressMapping.destroy({ where: {
        EntityId: entity.id,
        address: 'https://3pm-test.globalhealthapp.net/dhis/api/dataValueSets?orgUnitIdScheme=code&importStrategy=CREATE_AND_UPDATE&dryRun=false&datasetAllowsPeriods=true&strictOrganisationUnits=true&strictPeriods=true'
      }});
    } else {
      return Promise.reject();
    }
  }
};
