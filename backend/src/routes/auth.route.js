



import express from "express";
import multer from "multer";

import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Setup Multer (extracts file from request)
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// ✅ Ensure `upload.single("profilePic")` is used
router.put("/update-profile", protectRoute, upload.single("profilePic"), updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;


