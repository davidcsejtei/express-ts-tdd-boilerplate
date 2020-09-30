class InvalidIdParameter extends Error {
    constructor(id: any) {
        super(`Invalid Id parameter: ${id}`);
    }
}

export default InvalidIdParameter;