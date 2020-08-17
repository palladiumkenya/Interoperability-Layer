'use strict';

import models from '../models'

module.exports = {
  async up (queryInterface, Sequelize) {
    return await models.Settings.bulkCreate([
      { value: null, description: '3PM Username', isUpdatable: true, display: true },
      { value: null, description: '3PM Password', isUpdatable: true, display: true },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await models.Settings.destroy({ where: { name: ['3PM Username', '3PM Password'] }});
  }
};
