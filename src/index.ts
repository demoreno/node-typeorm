import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";

createConnection().then(async connection => {

    const app = express();
    app.listen(8080, () => {
        app.use(bodyParser.json());

        AppRoutes.forEach(route => {
            app[route.method](route.path, (request: Request, response: Response, next: Function) => {
                route.action(request, response)
                    .then(() => next)
                    .catch(err => next(err));
            });
        });

        console.log("Express application is up and running on port 8080");
    });

}).catch(error => console.log("TypeORM connection error: ", error));