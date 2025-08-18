import { findAllClubs } from "../repositories/clubRepository";
import { ok } from "../utils/httpHelper"

export const getClubsService = async () => {
    const data = await findAllClubs()
    const response = ok(data)

    return response;
}