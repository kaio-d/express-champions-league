export interface PlayerModel {
  id: number;
  name: string;
  position: string;
  statistics: {
    overall: number;
    pace: number;
    shotting: number;
    dribbling: number;
  };
}
