import { PlayerModel } from "../models/playerModel";
import {
  deleteOnePlayer,
  findAllPlayers,
  findPlayerById,
  insertPlayer,
} from "../repositories/playerRepository";
import { badResquest, created, noContent, ok } from "../utils/httpHelper";

export const getPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const getPlayerByIDService = async (id: number) => {
  const data = await findPlayerById(id);
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const cretaPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await insertPlayer(player);
    response = created();
  } else {
    response = badResquest();
  }

  return response;
};

export const deletePlayerByIdService = async (id: number) => {
  let response = null;
  await deleteOnePlayer(id);

  response = ok({ message: "Delete!" });
  return response;
};
