// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path

import { NextFunction, Request, Response } from "express";

const authMiddleware = (request: Request, response: Response, next: NextFunction) => {
    if (!request.headers['authorization']) {
        response.statusCode = 403;
        response.json({ error: "Missing JWT token from the 'Authorization' header" });
    } else {
        next();
    }
};

export default authMiddleware;