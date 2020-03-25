import 
    laborderModel
 from '../../src/models/laborder.model';

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

describe('LabOrder', () => {
    const Model = laborderModel(sequelize, dataTypes);
    const instance = new Model();

    checkModelName(Model)('LabOrder');


    describe('properties', () => {
        ['orderNumber', 'orderDateTime', 'patientID', 'patientName', 'gender', 'age', 'ageUnit', 'clinicianName', , 'investigation', 'testNumber', 'receiptNumber', 'transferFlag', 'requestTransferredDate'].forEach(checkPropertyExists(instance));


    })

});