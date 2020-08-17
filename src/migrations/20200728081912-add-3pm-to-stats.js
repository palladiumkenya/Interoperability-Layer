'use strict';

import models from '../models'

module.exports = {
  async up (queryInterface, Sequelize) {
    return await models.Stats.bulkCreate([
      { name: '3PM_STATUS', value: 'offline', description: '' },
      { name: '3PM_ADX_MESSAGETYPE', value: '0', description: '' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await models.Stats.destroy({ where: { name: ['3PM_STATUS', '3PM_ADX_MESSAGETYPE'] }});
  }
};
