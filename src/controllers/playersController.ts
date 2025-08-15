import { Request, Response } from "express";
import { getPlayerService } from "../services/playersService";
import { ok } from "../utils/httpHelper";

export const getPlayer = async (req: Request, res: Response) => {
  const data = await getPlayerService();

  const response = await ok(data);

  res.status(response.statusCode).json(response.body);
};
