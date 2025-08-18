import { findAllClubs, findClubById } from "../repositories/clubRepository";
import { badResquest, ok } from "../utils/httpHelper";

export const getClubsService = async () => {
  const data = await findAllClubs();
  const response = ok(data);

  return response;
};

export const getClubByIdService = async (id: number) => {
  let response = null;
  const data = await findClubById(id);

  if (data) {
    response = ok(data);
  } else {
    response = badResquest();
  }

  return response;
};
