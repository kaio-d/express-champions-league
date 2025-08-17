import { Router } from "express";
import { getPlayer, getPlayerById, postPlayerById } from "./controllers/playersController";

const router = Router();

router.get("/players", getPlayer);
router.post("/players", postPlayerById)

router.get("/players/:id", getPlayerById);


export default router;
