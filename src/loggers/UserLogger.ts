import User from "../models/User";
import Logger from "./Logger";

class UserLogger implements Logger {
    static messagePrefix = "User is logged: ";

    log(user: User): void {
        console.log(`${UserLogger.messagePrefix} ${JSON.stringify(user)}`);
    }
}

export default UserLogger;