import { Request, Response } from "express";
import { UserLogger } from "../loggers/Logger";
import { getLogger } from "../loggers/loggerFactory";
import isValidInteger from "../validators/NumberValidator";

const getAllUsers = (request: Request, response: Response) => {
    const { id } = request.params;
    const logger = getLogger(UserLogger);

    if (isValidInteger(id)) {
        const user = { name: 'David', age: id };
        logger.log(user);
        response.statusCode = 200;
        response.send({ user: user });
    } else {
        response.statusCode = 500;
        response.send({ error: 'Invalid ID parameter' });
    }
};

export default getAllUsers;