import { Request, Response } from "express";
import {
  getPlayerByIDService,
  getPlayerService,
} from "../services/playersService";

export const getPlayer = async (req: Request, res: Response) => {
  const httResponse = await getPlayerService();
  res.status(httResponse.statusCode).json(httResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const httResponse = await getPlayerByIDService(id);
  res.status(httResponse.statusCode).json(httResponse.body);
};
