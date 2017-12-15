var dao = require("../daos/Emaildata_Default_ActivityDao")
module.exports.create_Emaildata = function(Emaildata,callback) {
  dao.create_Emaildata(Emaildata,function (emaildata){
    callback(emaildata);
  });
}
module.exports.update_Emaildata = function(Emaildata,callback) {
  dao.update_Emaildata(Emaildata,function (emaildata){
    callback(emaildata);
  });
}
module.exports.search_Emaildata_for_update = function(Emaildata_id,callback) {
  dao.search_Emaildata_for_update(Emaildata_id,function (emaildata){
    callback(emaildata)
  });
}
module.exports.delete_Emaildata = function(Emaildata_id,callback) {
  dao.delete_Emaildata(Emaildata_id,function (){
    callback();
  });
}
module.exports.get_all_Emaildata = function(callback) {
  dao.get_all_Emaildata(function (list_of_emaildata){
    callback(list_of_emaildata)
  });
}
module.exports.search_Emaildata_for_detail = function(Emaildata_id,callback) {
  dao.search_Emaildata_for_detail(Emaildata_id,function (emaildata){
    callback(emaildata)
  });
}