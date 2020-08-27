'use strict';

import { messageTypes } from './../seed/messagetype.seed' 
import { entities } from './../seed/entity.seed' 
import { messageSubscribers } from './../seed/subscriber.seed' 
import { stats } from './../seed/stats.seed' 
import { labCodes } from './../seed/labcode.seed' 
import { settings } from './../seed/settings.seed' 
import { addressMappings } from './../seed/addressmapping.seed' 
import models from './../models'

module.exports = {
    
    async up(queryInterface, Sequelize) {
        await models.Entity.bulkCreate(entities);
        await models.MessageType.bulkCreate(messageTypes);
        await models.Stats.bulkCreate(stats);
        await models.LabCode.bulkCreate(labCodes);
        await models.Settings.bulkCreate(settings);
        await models.Subscriber.bulkCreate(messageSubscribers);
        await models.AddressMapping.bulkCreate(addressMappings);
    },

    async down(queryInterface, Sequelize) {

    }
};
