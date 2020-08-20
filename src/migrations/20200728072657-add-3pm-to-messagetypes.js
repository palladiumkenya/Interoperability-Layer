'use strict';

import models from '../models'

module.exports = {
  async up (queryInterface, Sequelize) {
    return await models.MessageType.create({
      name: 'PPPM^ADX',
      verboseName: 'PPPM_ADX',
      description: 'ADX is an international standard for aggregate data exchange. The ADX message contains aggregate level data for reporting to 3PM',
      template: '<?xml version="1.0" encoding="UTF-8"?><adx xmlns="urn:ihe:qrph:adx:2015" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ihe:qrph:adx:2015 ../schema/adx_loose.xsd" exported="2020-07-23T12:40+0300"><group orgUnit="16150" period="2020-06-01/P1M" dataSet="qzJqoxdfXJn"><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="PAXPnr3E0bq" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="xpXBknJgiGa" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="NjZP8M1crEZ" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="hTS4AwHXmy4" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="KWKBKX5TOZn" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="Ik8JJyPcQ2K" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="nJevmP4V2K0" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="IYgcWYnFZn0" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="SsB5mmWsigU" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="TejGomIjzWu" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="cwsDiWLZ68M" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="D1Pib2THuTj" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="RQIIGrbMcFp" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="XWsizEtBiKC" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="LkV9MIzKs8R" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="G1GYY8G4GGU" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="EuibuYaLJpe" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="nzh3CoCJGY8" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="OeyhGmHtEKP" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="FAKFHbbYrby" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="GrhWQaCDCQ4" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="KmdEfKbuS5M" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="JrMuAKI6YlN" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="O1bh1C2P1E8" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="u2wSZLv6s7m" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="SmTngpAmqW3" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="l0L6BfZ0L56" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="t48Hbcn9Ych" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="rx6RuqMmJYh" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="qyDLjwtfCNy" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="pB7iwg7m0n7" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="lQrQJYcTquG" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="ow8lNkkzEBr" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="hAs4V5N4bJW" value="0"/><dataValue dataElement="V322l8KD9oP" categoryOptionCombo="CDcn8cYAj0A" value="0"/><dataValue dataElement="SzRfzk6mC54" categoryOptionCombo="hAs4V5N4bJW" value="0"/><dataValue dataElement="SzRfzk6mC54" categoryOptionCombo="CDcn8cYAj0A" value="0"/></group></adx>',
      status: 'ACTIVE',
      priority: '2'
    });
  },

  async down (queryInterface, Sequelize) {
    return await models.MessageType.destroy({ where: { name: 'PPPM^ADX' }});
  }
};
