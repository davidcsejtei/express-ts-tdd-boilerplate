import { getLogger } from './LoggerFactory'
import UserLogger from './UserLogger';

describe('UserLogger', () => {
    test('log a user', () => {
        const userLogger = getLogger(UserLogger);
        console.log = jest.fn();

        const user = {
            name: "David",
            age: 30
        };

        const expectedLogText = `${UserLogger.messagePrefix} ${JSON.stringify(user)}`

        userLogger.log(user);

        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(expectedLogText);
    });
});