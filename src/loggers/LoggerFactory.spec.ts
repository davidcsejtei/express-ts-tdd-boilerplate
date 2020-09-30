import Logger from './Logger';
import { getLogger } from './LoggerFactory'
import ProductLogger from './ProductLogger';
import UserLogger from './UserLogger';

describe('LoggerFactory', () => {
    test('create user logger', () => {
        const userLogger = getLogger(UserLogger);
        const isLoggerClassCorrect = userLogger instanceof UserLogger;
        expect(isLoggerClassCorrect).toEqual(true);
    });

    test('create product logger', () => {
        const productLogger = getLogger(ProductLogger);
        const isLoggerClassCorrect = productLogger instanceof ProductLogger;
        expect(isLoggerClassCorrect).toEqual(true);
    });
});