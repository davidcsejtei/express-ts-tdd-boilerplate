import { getLogger } from './LoggerFactory'
import ProductLogger from './ProductLogger';

describe('ProductLogger', () => {
    test('log a product', () => {
        const productLogger = getLogger(ProductLogger);
        console.log = jest.fn();

        const product = {
            name: "Table",
            size: 12
        };

        const expectedLogText = `${ProductLogger.messagePrefix} ${JSON.stringify(product)}`

        productLogger.log(product);

        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(expectedLogText);
    });
});