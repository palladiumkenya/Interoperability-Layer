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
import SubscriberModel from '../../src/models/subscriber.model';


describe('Subscriber', () => {
    const Model = SubscriberModel(sequelize, dataTypes);
    const instance = new Model();


    checkModelName(Model)('Subscriber');

    describe('properties', () => {
        ['status'].forEach(checkPropertyExists(instance));
    });

});