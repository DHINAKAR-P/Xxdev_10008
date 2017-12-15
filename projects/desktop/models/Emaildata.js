'use strict';

module.exports = function(sequelize, DataTypes) {
  var Emaildata = sequelize.define("Emaildata", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    sendername: DataTypes.STRING,
    receivername: DataTypes.STRING
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return Emaildata;
};