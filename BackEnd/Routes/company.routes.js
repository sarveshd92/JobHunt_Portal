import Router from "express"
import { deleteallbyid, getcompany, getcompanybyid, getusercomp, register, updatedetails, updatedetailsonly } from "../Controller/company.controller.js";
import auth from "../Middlewares/auth.middleware.js";
import { upload } from "../Middlewares/multer.middleware.js";
const router=Router();

router.route("/register").post(auth,register)
router.route("/delete").delete(auth,deleteallbyid)
router.route("/usercomp").get(auth,getusercomp)
router.route("/get/company").get(auth,getcompany)
router.route("/getcompany/:id").get(getcompanybyid)
router.route("/update/details/:id").put(upload.single("logo"),auth,updatedetails)
router.route("/update/details/:id").put(auth,updatedetailsonly)
export default router;