import { Router } from "express";
import { deletePlayerById, getPlayer, getPlayerById, postPlayerById } from "./controllers/playersController";

const router = Router();

router.get("/players", getPlayer);
router.post("/players", postPlayerById)
router.delete("/players/:id", deletePlayerById)

router.get("/players/:id", getPlayerById);


export default router;
