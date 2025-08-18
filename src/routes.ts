import { Router } from "express";
import {
  deletePlayerById,
  getPlayer,
  getPlayerById,
  postPlayerById,
  updatePlayerById,
} from "./controllers/playersController";
import { getClubByID, getClubs } from "./controllers/clubsController";

const router = Router();

// Players
router.get("/players", getPlayer);
router.post("/players", postPlayerById);
router.delete("/players/:id", deletePlayerById);
router.patch("/players/:id", updatePlayerById)

router.get("/players/:id", getPlayerById);

// Clubs
router.get("/clubs", getClubs)
router.get("/clubs/:id", getClubByID)


export default router;
