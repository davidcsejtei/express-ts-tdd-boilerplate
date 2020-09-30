const isValidInteger = (input: any): input is number => {
    if (!input) {
        return false;
    } else {
        if (typeof input === "number") {
            return Number.isInteger(input);
        } else {
            return !isValidType(input) || canBeHexNumber(input) || hasLeadingZero(input)
                ? false : Number.isSafeInteger(+input);
        }
    }
}

const isValidType = (input: any): boolean => {
    return typeof input !== "object";
}

const canBeHexNumber = (input: string): boolean => {
    return input.toLowerCase().indexOf('x') > -1;
}

const hasLeadingZero = (input: string): boolean => {
    return input[0] == '0';
}

export default isValidInteger;