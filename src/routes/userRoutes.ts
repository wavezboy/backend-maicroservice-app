import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.post("/signUp", userController.signUpUser);
router.get("/getUsers", userController.getAllUsers);
router.get("/getUser/:id", userController.getUser);
router.delete("/deleteUser/:id", userController.deleteUser);
router.put("/updateUser/:id", userController.updateUser);

export default router;
