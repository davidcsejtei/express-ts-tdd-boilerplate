const isValidInteger = (input: any): input is number => {
    return canBeHexNumber(input) || hasLeadingZero(input)
        ? false : Number.isSafeInteger(+input);
}

const canBeHexNumber = (input: string): boolean => {
    return input.toLowerCase().indexOf('x') > -1;
}

const hasLeadingZero = (input: string): boolean => {
    return input[0] == '0';
}

export default isValidInteger;