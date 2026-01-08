import express from "express";
import asromaPlayers from "../data.js";
import {index, show, destroy, store, update, modify} from "../controllers/playerController.js"
import notFound from "../middlewares/pageNotFound.js";


const router = express.Router();

//INDEX
router.get("/",notFound, index);

//SHOW
router.get("/:id",show );

//STORE
router.post("/", store);

//UPDATE
router.put("/:id", update);

//MONDIFY
router.patch("/:id", modify);

//DESTROY
router.delete("/:id",destroy)

export default router;