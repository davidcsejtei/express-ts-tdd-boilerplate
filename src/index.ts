import { Request, Response, NextFunction } from "express";
import express from "express";
import http from 'http';
import bodyParser from 'body-parser';

require('dotenv').config();

const app = express();
const server = new http.Server(app).listen(process.env.API_PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((request: Request, response: Response, next: NextFunction) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    response.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

import getAllUsersRequest from './requests/getAllUsers';

app.get('/users/all/:id', getAllUsersRequest);

/* import { ProductLogger, UserLogger } from "./logger/Logger";
import { getLogger } from "./logger/loggerFactory";

function getUserRequest() {
    const logger = getLogger(UserLogger);
    const user = {
        name: 'David',
        age: 30
    };
    logger.log({ ...user, ize: '' });
    return user;
}

function getProductRequest() {
    const logger = getLogger(ProductLogger);
    const product = {
        name: 'Table',
        size: 12
    };
    logger.log(product);
    return product;
}

getUserRequest();
getProductRequest();*/
