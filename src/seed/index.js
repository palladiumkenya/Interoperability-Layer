import { seedMessageTypes } from './messagetype.seed'
import { seedEntities } from './entity.seed'
import { seedSubscribers } from './subscriber.seed'
import { seedStats } from './stats.seed'
import { seedLabCodes } from './labcode.seed'
import { seedSettings } from './settings.seed'
import { seedaddressMappings } from './addressmapping.seed'
import { logger } from '../utils/logger.utils'

import models from '../models'

import path from 'path'
import Umzug from 'umzug'

export const initializeDb = async (options = { force: false }) => {
  let message = { level: '', msg: '' }
  const sequelize = models.sequelize;
  const Sequelize = models.Sequelize;
  try {
    await sequelize.sync({
      force: false,
      logging: (t) => {
        logger.info(t)
      }
    })
    const totalEntities = await models.Entity.count()

    if (totalEntities) {
      message.level = 'info'
      message.msg = `Data seeding skipped`
    } else {
      await Promise.all([seedEntities(), seedMessageTypes(), seedStats(), seedLabCodes(), seedSettings()])
      await Promise.all([seedSubscribers(), seedaddressMappings()])
      message.level = 'info'
      message.msg = 'All seed data saved successfully!'
    }

    const umzug = new Umzug({
      migrations: {
        path: path.join(__dirname, './../migrations'),
        params: [sequelize.getQueryInterface(), Sequelize]
      },
      storage: 'sequelize',
      storageOptions: {sequelize: sequelize}
    });
    await umzug.up();
    
  } catch (error) {
    message.level = 'error'
    message.msg = `Error seeding data: ${error}`
  }
  return message
}
