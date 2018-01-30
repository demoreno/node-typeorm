import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";

/**
 *   Loads all posts from the database.
 */
export async function getUsers(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(User);

    // load a post by a given post id
    const users = await postRepository.find();

    // return loaded posts
    response.send(users);
}