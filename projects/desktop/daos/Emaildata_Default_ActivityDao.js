var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Emaildata_Default_Activity_SQL.properties');
module.exports.create_Emaildata = function(Emaildata,callback) {
  var create_query = sqlQuery._properties.create_Emaildata;
  sequelize.query(create_query, {
    replacements: {
    	sendername : Emaildata.sendername,
    	receivername : Emaildata.receivername,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Emaildata
  }).then(function(emaildata) {
		callback(emaildata);
	});
}
module.exports.update_Emaildata = function(Emaildata,callback) {
  var update_query = sqlQuery._properties.update_Emaildata;
  sequelize.query(update_query, {
    replacements: {
    	id : Emaildata.id,
    	sendername : Emaildata.sendername,
    	receivername : Emaildata.receivername,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.Emaildata
  }).then(function(emaildata) {
		callback(emaildata);
	});
}
module.exports.search_Emaildata_for_update = function(Emaildata_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Emaildata;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Emaildata_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Emaildata
  }).then(function(emaildata) {
		callback(emaildata[0]);
	});
}
module.exports.delete_Emaildata = function(Emaildata_id,callback) {
  var delete_query = sqlQuery._properties.delete_Emaildata;
  sequelize.query(delete_query, {
    replacements: {
    	id: Emaildata_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Emaildata
  }).then(function() {
		callback();
	});
}
module.exports.get_all_Emaildata = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_Emaildata;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Emaildata
  }).then(function(emaildata) {
		callback(emaildata);
	});
}
module.exports.search_Emaildata_for_detail = function(Emaildata_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Emaildata;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Emaildata_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Emaildata
  }).then(function(emaildata) {
		callback(emaildata[0]);
	});
}