import Product from "../models/Product";
import Logger from "./Logger";

class ProductLogger implements Logger {
    static messagePrefix = "Product is logged: ";

    log(product: Product): void {
        console.log(`${ProductLogger.messagePrefix} ${JSON.stringify(product)}`);
    }
}

export default ProductLogger;