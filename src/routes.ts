import {getUsers} from "./controllers/UsersController";

export const AppRoutes = [
    {
        path: "/users",
        method: "get",
        action: getUsers
    }  
];