import { findAllPlayers } from "../repositories/playerRepository";
import { noContent, ok } from "../utils/httpHelper";

export const getPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent()
  }

  return response
};
