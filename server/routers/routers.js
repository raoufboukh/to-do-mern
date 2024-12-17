import express from "express";
import { controllersGet, controllersPost } from "../controllers/controlers.js";

const router = express.Router();

router.route("/add").post(controllersPost);
router.route("/").get(controllersGet);

export default router;
