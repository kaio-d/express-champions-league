import { PlayerModel } from "../models/playerModel";
import { StatisticsModel } from "../models/statisticsModel";
import {
  deleteOnePlayer,
  findAllPlayers,
  findAndModifyPlayer,
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
    response = await created();
  } else {
    response = await badResquest();
  }

  return response;
};

export const deletePlayerByIdService = async (id: number) => {
  let response = null;
  const isDeleted = await deleteOnePlayer(id);

  if (isDeleted) {
    response = await ok({ message: "Delete!" });
  } else {
    response = await badResquest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  const data = await findAndModifyPlayer(id, statistics);
  let response = null;

  if (Object.keys(data).length === 0) {
    response = badResquest();
  } else {
    response = ok(data);
  }

  return response;
};
