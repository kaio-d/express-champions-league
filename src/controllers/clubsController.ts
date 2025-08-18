import { Request, Response } from "express";
import { getClubsService } from "../services/clubsService";

export const getClubs = async (req: Request, res: Response) => {
  const response = await getClubsService();
  res.status(response.statusCode).json(response.body);
};
