import LabCodeModel from '../../src/models/labcode.model';

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

describe('labCode', () => {

    const Model = LabCodeModel(sequelize, dataTypes);
    const instance =new Model();
    checkModelName(Model)('LabCode');

    describe('properties', () => {
        ['codeType', 'codeKey', 'codeName'].forEach(checkPropertyExists(instance));
    })

});