import {getUsers, getUsersById} from "./controllers/UsersController";

export const AppRoutes = [
    {
        path: "/users",
        method: "get",
        action: getUsers
    },
    {
        path : "/users/:id",
        method : "get",
        action : getUsersById
    }
];