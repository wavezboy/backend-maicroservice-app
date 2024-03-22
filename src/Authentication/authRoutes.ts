import express from "express";
import * as authController from "./authController";

const router = express.Router();

router.post("/login", authController.Login);
router.post("/authenticate", authController.Authenticate);

export default router;
