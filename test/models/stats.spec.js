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

import statsModel from '../../src/models/stats.models';

describe('Stats', () => {

    const Model = statsModel(sequelize, dataTypes);
    const instance = new Model();

    checkModelName(Model)('Stats');
    describe('properties', () => {
        ['name', 'value', 'description'].forEach(checkPropertyExists(instance));
    })

})