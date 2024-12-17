import express from "express";
import {
  controllersDelete,
  controllersGet,
  controllersPost,
} from "../controllers/controlers.js";

const router = express.Router();

router.route("/add").post(controllersPost);
router.route("/").get(controllersGet);
router.route("/:id").delete(controllersDelete);

export default router;
