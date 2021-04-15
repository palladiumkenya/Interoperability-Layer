module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.describeTable('queue').then(tableDesc => {
      if (tableDesc.statusCode) {
        return Promise.resolve()
      } else {
        return queryInterface.addColumn('queue', 'statusCode', {
          type: Sequelize.DataTypes.ENUM('1', '2', '3'),
          allowNull: true
        })
      }
    })
  },
  down: (queryInterface, Sequelize) => {}
}
