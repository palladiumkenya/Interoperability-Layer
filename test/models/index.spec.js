import {
    db
} from '../../src/models/index';
import chai from 'chai';
const {
    assert
} = require('chai');
import {
    expect
} from 'chai';
import Sequelize from 'sequelize';
import {
    internal
} from 'boom';
import fs from 'fs'
import path from 'path'
import {
    AssertionError
} from 'assert';
import {
    callbackify
} from 'util';
var should = require('should');
var sinon = require('sinon');
chai.use(require('chai-json'));




describe('Connection and Environmental Variables', () => {

    const env = process.env.NODE_ENV || 'development';
    const platform = process.env.platform || 'windows';
    it('should have been defined', () => {


        assert.isDefined(env);

        assert.isDefined(platform);


    });

    it('Configuration file should be  a json file', () => {

        expect(path.join(process.cwd(), 'src', 'config', 'config.json')).to.be.jsonFile();
    });


    it('The connection to sequelize must be correct', () => {

        const config = require(path.join(process.cwd(), 'src', 'config', 'config.json'))[env];

        const defaults = {
            username: process.env.USERNAME_PROP,
            password: process.env.PASSWORD_PROP,
            database: process.env.DATABASE_PROP,
            host: 'localhost',
            logging: true,
            operatorsAliases: false,
            pool: {
                max: 10,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }

        let prodConfig = {}
        prodConfig = {
            ...defaults,
            dialect: 'mysql'
        }

        const sequelize = process.env.USERNAME_PROP ?
            new Sequelize(
                prodConfig.database,
                prodConfig.username,
                prodConfig.password,
                prodConfig
            )

            :
            new Sequelize(config.database, config.username, config.password, config)


        sequelize.authenticate()
            .then(function () {
                return callback(null);
                should.not.exist(err);

            })
            .catch(function (err) {
                should.exist(err);

            });





    })






});