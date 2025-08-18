import { Router } from "express";
import {
  deletePlayerById,
  getPlayer,
  getPlayerById,
  postPlayerById,
  updatePlayerById,
} from "./controllers/playersController";

const router = Router();

router.get("/players", getPlayer);
router.post("/players", postPlayerById);
router.delete("/players/:id", deletePlayerById);
router.patch("/players/:id", updatePlayerById)

router.get("/players/:id", getPlayerById);

export default router;
