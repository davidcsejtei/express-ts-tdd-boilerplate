import { Request, Response } from "express";
import InvalidIdParameter from "../errors/InvalidIDParameter";
import { getLogger } from "../loggers/LoggerFactory";
import UserLogger from "../loggers/UserLogger";
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
        response.send({ error: new InvalidIdParameter(id).message });
    }
};

export default getAllUsers;