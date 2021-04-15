'use strict'

module.exports = function (sequelize, DataTypes) {
  let Queue = sequelize.define('Queue', {
    message: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['JSON', 'XML'],
      defaultValue: 'JSON'
    },
    noOfAttempts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ['SENT', 'QUEUED', 'ERROR'],
      defaultValue: 'QUEUED'
    },
    sendDetails: DataTypes.TEXT('long'),
    priority: {
      type: DataTypes.ENUM,
      values: ['1', '2', '3'],
      defaultValue: '3'
    },
    statusCode: {
      type: DataTypes.ENUM,
      values: ['1', '2', '3'], // 1 = Success(HTTP => 200), 2 = error not found(HTTP 404), 3 = error internal server error(HTTP 500)
      defaultValue: '1'
    }
  }, {
    tableName: 'queue'
  })

  Queue.associate = function (models) {
    Queue.belongsTo(models.Entity)
    Queue.hasMany(models.Logs)
  }

  return Queue
}
