import { Request, Response } from "express";
import { getPlayerService } from "../services/playersService";

export const getPlayer = async (req: Request, res: Response) => {
  const httResponse = await getPlayerService();

  res.status(httResponse.statusCode).json(httResponse.body);
};
