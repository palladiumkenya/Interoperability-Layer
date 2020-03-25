import {
    internal,
    expectationFailed
} from 'boom';
import chai from 'chai';
import {
    expect
} from 'chai';

var sinon = require('sinon');
chai.use(require('sinon-chai'));
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,

} = require('sequelize-test-helpers');
import MessageTypeModel from '../../src/models/messagetype.model';
import EntityModel from '../../src/models/entity.model';
import SubcriberModel from '../../src/models/subscriber.model';

describe('messageType', () => {
    const Model = MessageTypeModel(sequelize, dataTypes);
    const instance = new Model();


    checkModelName(Model)('MessageType');

    describe('properties', () => {
        ['name', 'verboseName', 'description', 'template', 'status', 'priority'].forEach(checkPropertyExists(instance));
    });

    context('Associations', () => {

        const Subcriberm = SubcriberModel(sequelize, dataTypes);
        const EntityM = EntityModel(sequelize, dataTypes);
        before(() => {
            Model.associate({

                Subcriberm,
                EntityModel
            })
        })

        it('defined a belongs to Many  association with Entity through SubScriber', () => {
            expect(Model.belongsToMany).to.have.been.calledWith(EntityM.Model, {
                through: Subcriberm.Model
            })

        })
    })



})