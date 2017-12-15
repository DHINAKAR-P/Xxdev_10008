var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Emaildata_Default_ActivityController")
router.post("/Emaildata", controller.create_Emaildata);
router.get(/^\/Emaildata\/(\d+)$/, controller.search_Emaildata_for_update);
router.put("/Emaildata", controller.update_Emaildata);
router.delete(/^\/Emaildata\/(\d+)$/, controller.delete_Emaildata);
router.get("/Emaildata", controller.get_all_Emaildata);
router.get(/^\/Emaildata\/search_detail\/(\d+)$/, controller.search_Emaildata_for_detail);

module.exports = router;