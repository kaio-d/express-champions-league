import { PlayerModel } from "../models/playerModel";
import { StatisticsModel } from "../models/statisticsModel";

const playerDatabase: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    position: "Forward",
    statistics: {
      overall: 94,
      pace: 85,
      shotting: 92,
      dribbling: 96,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    position: "Forward",
    statistics: {
      overall: 93,
      pace: 87,
      shotting: 94,
      dribbling: 88,
    },
  },
  {
    id: 3,
    name: "Neymar Jr",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 91,
      shotting: 85,
      dribbling: 95,
    },
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    position: "Midfielder",
    statistics: {
      overall: 91,
      pace: 74,
      shotting: 86,
      dribbling: 88,
    },
  },
  {
    id: 5,
    name: "Virgil van Dijk",
    position: "Defender",
    statistics: {
      overall: 90,
      pace: 77,
      shotting: 60,
      dribbling: 72,
    },
  },
  {
    id: 6,
    name: "Kylian Mbappé",
    position: "Forward",
    statistics: {
      overall: 92,
      pace: 97,
      shotting: 88,
      dribbling: 92,
    },
  },
  {
    id: 7,
    name: "Luka Modrić",
    position: "Midfielder",
    statistics: {
      overall: 88,
      pace: 74,
      shotting: 76,
      dribbling: 90,
    },
  },
  {
    id: 8,
    name: "Erling Haaland",
    position: "Forward",
    statistics: {
      overall: 91,
      pace: 89,
      shotting: 93,
      dribbling: 80,
    },
  },
  {
    id: 9,
    name: "Mohamed Salah",
    position: "Forward",
    statistics: {
      overall: 90,
      pace: 93,
      shotting: 87,
      dribbling: 90,
    },
  },
  {
    id: 10,
    name: "Thibaut Courtois",
    position: "Goalkeeper",
    statistics: {
      overall: 90,
      pace: 50,
      shotting: 40,
      dribbling: 55,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return playerDatabase;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return playerDatabase.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  playerDatabase.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = playerDatabase.findIndex((player) => player.id === id);

  if (index !== -1) {
    playerDatabase.splice(index, 1);
  }
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
):Promise<PlayerModel> => {
  const index = playerDatabase.findIndex((player) => player.id === id);

  if(index !== -1){
    playerDatabase[index].statistics = statistics
  }

  return playerDatabase[index]
};
