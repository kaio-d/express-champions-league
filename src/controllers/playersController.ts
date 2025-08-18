import { Request, Response } from "express";
import {
  cretaPlayerService,
  deletePlayerByIdService,
  getPlayerByIDService,
  getPlayerService,
} from "../services/playersService";
import { badResquest, noContent } from "../utils/httpHelper";

export const getPlayer = async (req: Request, res: Response) => {
  const httResponse = await getPlayerService();
  res.status(httResponse.statusCode).json(httResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const httResponse = await getPlayerByIDService(id);
  res.status(httResponse.statusCode).json(httResponse.body);
};

export const postPlayerById = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httResponse = await cretaPlayerService(bodyValue);

  if (httResponse) {
    res.status(httResponse.statusCode).json(httResponse.body);
  }
};

export const deletePlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httResponse = await deletePlayerByIdService(id);
  
  res.status(httResponse.statusCode).json(httResponse.body);
};
