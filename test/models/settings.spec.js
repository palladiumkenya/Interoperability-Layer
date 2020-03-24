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

import settingModel from '../../src/models/settings.model';

describe('Settings', () => {

    const Model = settingModel(sequelize, dataTypes);
    const instance = new Model();

    checkModelName(Model)('Settings');
    describe('properties', () => {
        ['value', 'description', 'isUpdatable', 'display'].forEach(checkPropertyExists(instance));
    })

})