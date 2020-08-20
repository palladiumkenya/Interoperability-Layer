'use strict';

import models from '../models'

module.exports = {
  async up (queryInterface, Sequelize) {
    return await models.Stats.bulkCreate([
      { name: 'PPPM_STATUS', value: 'offline', description: '' },
      { name: 'PPPM_ADX_MESSAGETYPE', value: '0', description: '' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await models.Stats.destroy({ where: { name: ['PPPM_STATUS', 'PPPM_ADX_MESSAGETYPE'] }});
  }
};
