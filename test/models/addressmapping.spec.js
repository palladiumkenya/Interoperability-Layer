import addressmappingmodel from '../../src/models/addressmapping.model';
import entitymodel from '../../src/models/entity.model';
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

describe('../../src/models/addressmapping.model', () => {
    const Model = addressmappingmodel(sequelize, dataTypes)
    const instance = new Model();
    checkModelName(Model)('AddressMapping')
    console.log("InstanceName is  " + Model);
    context('properties', () => {
        ['address', 'status', 'protocol'].forEach(checkPropertyExists(instance))

    })



    context('associations', () => {
        const entitym = entitymodel(sequelize, dataTypes);
        const instance = new entitym();





        before(() => {
            Model.associate({
                entitymodel
            });
        });

        it('defined  a belongTo association with EntityModel', () => {
            expect(Model.belongsTo).to.have.been.calledWith(entitym.Model)
        })



    })
})