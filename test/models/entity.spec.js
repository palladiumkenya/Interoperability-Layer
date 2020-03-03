import entitymodel from '../../src/models/entity.model';
import addressmappingmodel from '../../src/models/addressmapping.model';
import Queuemappingmodel from '../../src/models/queue.model';
import MessageTypeModel from '../../src/models/messagetype.model';
import SubcriberModel from '../../src/models/subscriber.model';
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


describe('../../src/models/entity.model', () => {

    const Model = entitymodel(sequelize, dataTypes);

    const instance = new Model();

    checkModelName(Model)('Entity');
    describe('properties', () => {
        ['name', 'description', 'status', 'color'].forEach(checkPropertyExists(instance))
    })



    context('associations', () => {


        const addressmap = addressmappingmodel(sequelize, dataTypes);
        const QueueMap = Queuemappingmodel(sequelize, dataTypes);
        const Subcriberm = SubcriberModel(sequelize, dataTypes);

        before(() => {
            Model.associate({
                addressmap,
                QueueMap,
                Subcriberm
            })
        })
        it('defined a hasMany association with AddressMappingModel', () => {
            expect(Model.hasMany).to.have.been.calledWith(addressmap.Model)
        });
        it('defined a hasMany association with Queue', () => {
            expect(Model.hasMany).to.have.been.calledWith(Queuemappingmodel.Model)
        });
        it('defined a belongsto Many association with MessageType through Subcriber', () => {
            expect(Model.belongsToMany).to.have.been.calledWith(MessageTypeModel.Model, {
                through: Subcriberm.Model
            });


        });

    });

});