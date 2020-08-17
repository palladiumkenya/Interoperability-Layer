'use strict';

import models from '../models'

module.exports = {
  async up (queryInterface, Sequelize) {
    return await models.Entity.create({
      name: '3PM',
      description: 'DHIS 2 lets you manage aggregate data with a flexible data model and advanced visualization features',
      status: 'INACTIVE',
      color: 'blue'
    });
  },

  async down (queryInterface, Sequelize) {
    return await models.Entity.destroy({ where: { name: '3PM' }});
  }
};
