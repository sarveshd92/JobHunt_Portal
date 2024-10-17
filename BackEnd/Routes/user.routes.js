import { Router } from "express";
import { getUsers, login, logout, profileUpdate, register } from "../Controller/user.controller.js";
import auth from "../Middlewares/auth.middleware.js";
import { upload } from "../Middlewares/multer.middleware.js";
const router = Router();
router.route("/register").post(upload.single("resume") ,register)
router.route("/login").post(login)
router.route("/logout").post(auth,logout)
router.route("/profile/update").post(upload.single("resumeUpload"),auth,profileUpdate);

router.route("/getusers").get(auth,getUsers)
export default router;