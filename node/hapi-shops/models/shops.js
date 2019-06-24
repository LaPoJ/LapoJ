// mvc model
// mysql 数据 -> 映射为一个对象
// 称为 orm 操作

module.exports = (sequelize, DataTypes) => sequelize.define(
  'shops',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumb_url: DataTypes.STRING
  },{
    tableName: 'shops'
  }
);