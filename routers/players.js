import express from "express";
import asromaPlayers from "../data.js";
import {index, show, destroy, store} from "../controllers/playerController.js"


const router = express.Router();

//INDEX
router.get("/", index);

//SHOW
router.get("/:id",show );

//STORE
router.post("/", store);

//UPDATE
router.put("/:id", (req, res) => {
    const id = req.params.id
    res.send("load player n."+ id)
})

//MONDIFY
router.patch("/:id", (req,res) => {
    const id = req.params.send
    res.send("loading player n."+ id)
})

//DESTROY
router.delete("/:id",destroy)

export default router;