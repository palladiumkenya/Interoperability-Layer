import LogModel from '../../src/models/logs.model';
import chai from 'chai';
import {
    internal,
    expectationFailed
} from 'boom';
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



describe('Logs', () => {

    const Model = LogModel(sequelize, dataTypes);
    const instance = new Model();
    checkModelName(Model)('Logs');

    describe('properties', () => {
        ['log', 'level'].forEach(checkPropertyExists(instance));
    })

});