import { ClubModel } from "../models/clubModel";

const clubDatabase: ClubModel[] = [
  { id: 1, name: "Real Madri" },
  { id: 2, name: "Barcelona" },
];

export const findAllClubs = async ():Promise<ClubModel[]> => {
  return clubDatabase;
};
