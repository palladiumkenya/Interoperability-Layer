'use strict';

import models from '../models'

module.exports = {
  async up (queryInterface, Sequelize) {
    const entity = await models.Entity.findOne({ where: { name: '3PM' }});
    const messageType = await models.MessageType.findOne({ where: { name: '3PM^ADX' }});
    if (entity.id && messageType.id) {
      return await models.Subscriber.create({
        status: 'ACTIVE',
        EntityId: entity.id,
        MessageTypeId: messageType.id
      });
    } else {
      return Promise.reject();
    }
  },

  async down (queryInterface, Sequelize) {
    const entity = await models.Entity.findOne({ where: { name: '3PM' }});
    const messageType = await models.MessageType.findOne({ where: { name: '3PM^ADX' }});
    if (entity.id && messageType.id) {
      return await models.Subscriber.destroy({ where: { EntityId: entity.id, MessageTypeId: messageType.id }});
    } else {
      return Promise.reject();
    }
  }
};
