import express from "express";
import {
  controllersDelete,
  controllersGet,
  controllersPost,
  controllersUpdate,
} from "../controllers/controlers.js";

const router = express.Router();

router.route("/add").post(controllersPost);
router.route("/").get(controllersGet);
router.route("/:id").delete(controllersDelete);
router.route("/:id").patch(controllersUpdate);

export default router;
