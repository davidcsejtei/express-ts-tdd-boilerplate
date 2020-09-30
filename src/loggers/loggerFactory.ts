import Logger from "./Logger";

export function getLogger<L extends Logger>(Logger: new () => L) {
    return new Logger();
}
