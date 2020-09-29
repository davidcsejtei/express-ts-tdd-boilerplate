type User = {
    name: string,
    age: number
};

type Product = {
    name: string,
    size: number
};

export interface Logger {
    log(subject: object): void
}

export class UserLogger implements Logger {
    log(subject: User): void {
        console.log(`User is logged: ${JSON.stringify(subject)}`);
    }
}

export class ProductLogger implements Logger {
    log(subject: Product): void {
        console.log(`Product is logged: ${subject} `);
    }
}