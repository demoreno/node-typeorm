import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";
import {utilsResponse} from '../utils/Utilsresponse';

/**
 *
 * @param {} request
 * @param {} response
 * @returns {Promise<void>}
 */
export async function getUsers(request: Request, response: Response) {
    const postRepository = getManager().getRepository(User);
    const users = await postRepository.find();
    utilsResponse(response,200,users,[]);
}

/**
 *
 * @param {} request
 * @param {} response
 * @returns {Promise<void>}
 */
export async function getUsersById(request: Request, response: Response) {
    const user = await getManager()
        .getRepository(User)
        .createQueryBuilder("user")
        .where("user.id = :id", { id: request.params.id })
        .execute();
    utilsResponse(response,200,user,[]);
}

