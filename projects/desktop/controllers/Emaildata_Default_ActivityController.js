var service = require("../services/Emaildata_Default_ActivityService")
module.exports.create_Emaildata = function(req, res) {
  var Emaildata = req.body;
  service.create_Emaildata(Emaildata,function (emaildata){
    res.status(201);
    res.json(emaildata);
  });
}
module.exports.update_Emaildata = function(req, res) {
  var Emaildata = req.body;
  service.update_Emaildata(Emaildata,function (emaildata){
    res.status(201);
    res.json(emaildata);

  });
}
module.exports.search_Emaildata_for_update = function(req, res) {
  var Emaildata_id = parseInt(req.params[0], 10);
  service.search_Emaildata_for_update(Emaildata_id,function (emaildata){
    res.json(emaildata);
  });
}
module.exports.delete_Emaildata = function(req, res) {
  var Emaildata_id = parseInt(req.params[0], 10);
  service.delete_Emaildata(Emaildata_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_Emaildata = function(req, res) {
  var emaildata_id = req.query.id;

  service.get_all_Emaildata(function (emaildata){
    res.json(emaildata);
  });
}
module.exports.search_Emaildata_for_detail = function(req, res) {
  var Emaildata_id = parseInt(req.params[0], 10);
  service.search_Emaildata_for_detail(Emaildata_id,function (emaildata){
    res.json(emaildata);
  });
}