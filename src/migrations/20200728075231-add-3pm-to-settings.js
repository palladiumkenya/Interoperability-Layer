'use strict';

import models from '../models'

module.exports = {
  async up (queryInterface, Sequelize) {
    return await models.Settings.bulkCreate([
      { value: null, description: 'PPPM Username', isUpdatable: true, display: true },
      { value: null, description: 'PPPM Password', isUpdatable: true, display: true },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await models.Settings.destroy({ where: { name: ['PPPM Username', 'PPPM Password'] }});
  }
};
