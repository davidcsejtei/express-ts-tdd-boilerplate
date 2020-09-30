class InvalidIdParameter extends Error {
    constructor(id: any) {
        super(`Invalid id parameter: ${id}`);
    }
}

export default InvalidIdParameter;