import { Router } from "express";
import { appliedjob, applyjob, updatestatus, } from "../Controller/application.controller.js";
import auth from "../Middlewares/auth.middleware.js";
const router=Router();


router.route("/applyjob/:id").post(auth,applyjob);
router.route("/appliedjobs").get(auth, appliedjob);
router.route("/updatestatus/:id").put(auth,updatestatus);


export default router;