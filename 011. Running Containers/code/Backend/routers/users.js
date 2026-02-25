import express from "express";
import { addUser, getUser } from "../controllers/users.js";

const router = express.Router();

router.route("/users/add").post(addUser);
router.route("/users/get").get(getUser);

export default router;