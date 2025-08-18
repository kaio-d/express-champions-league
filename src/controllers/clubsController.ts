import { Request, Response } from "express";
import { getClubByIdService, getClubsService } from "../services/clubsService";

export const getClubs = async (req: Request, res: Response) => {
  const response = await getClubsService();
  res.status(response.statusCode).json(response.body);
};

export const getClubByID = async function (req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const httResponse = await getClubByIdService(id);
  res.status(httResponse.statusCode).json(httResponse.body);
};
