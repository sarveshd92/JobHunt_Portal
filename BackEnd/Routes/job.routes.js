import {Router} from "express"
import { appliedjobstatus, deletejobbyid, getadmincreatedjobs, getalljobs, getjobsbyid, getsearchjobs, postjob, searchalljobs } from "../Controller/job.controller.js"
import auth from "../Middlewares/auth.middleware.js";
const router=Router()
router.route("/register").post( auth, postjob);
router.route("/getadminjobs").get( auth,getadmincreatedjobs);
router.route("/getalljobs").get(getalljobs)
router.route("/getsearchjobs/").get(getsearchjobs)
router.route("/getjobbyid/:jobid").get(auth,getjobsbyid)
router.route("/appliedjobstatus").post(auth,appliedjobstatus)
router.route("/searchjob").post(searchalljobs)
router.route("/deletebyjobid/:jobid").get(deletejobbyid)
export default router;