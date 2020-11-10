import { logger } from '../utils/logger.utils'
import models from '../models'
import path from 'path'
import Umzug from 'umzug'

export const initializeDb = async (options = { force: false }) => {
    let message = { level: '', msg: '' }
    const sequelize = models.sequelize;
    const Sequelize = models.Sequelize;
    const umzug = new Umzug({
        migrations: {
            path: path.join(__dirname, './../migrations'),
            params: [sequelize.getQueryInterface(), Sequelize]
        },
        storage: 'sequelize',
        storageOptions: { sequelize: sequelize }
    });
    try {
        await sequelize.sync({
            force: false,
            logging: (t) => {
                logger.info(t)
            }
        }).then(r => {
            return umzug.up();
        });
    } catch (error) {
        message.level = 'error'
        message.msg = `Error seeding data: ${error}`
    }
    return message
}
