import chai from 'chai';
import models from '../../src/models';
import {
    initializeDb
} from '../../src/seed/index.js';
import {
    logger
} from '../../src/utils/logger.utils'
import {
    expectationFailed,
    internal
} from 'boom';
const {
    assert
} = require('chai');
describe('Seeding of data', () => {


    try {

        models.sequelize.sync({
            force: false,
            logging: (t) => {
                logger.info(t)

            }
        }).then(() => {
            const totalEntities = models.Entity.count()
            assert.isDefined(totalEntities);
        })

        // const totalEntities = await models.Entity.count();
        // assert.isDefined(totalEntities);








    } catch (error) {

    }
});