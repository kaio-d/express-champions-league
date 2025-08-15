interface PlayerModel {
  id: number;
  name: string;
}

const playerDatabase: PlayerModel[] = [
  { id: 1, name: "Lionel Messi" },
  { id: 2, name: "Cristiano Ronaldo" },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return playerDatabase;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return playerDatabase.find((player) => player.id === id);
};
