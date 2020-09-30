import getAllUsers from "./getAllUsers";
import { Request, Response } from "express";

import { getLogger } from '../loggers/LoggerFactory';
jest.mock("../loggers/loggerFactory");

describe('Get all users request', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject = {};

    const mockLogger = () => {
        (getLogger as any).mockImplementation(() => {
            return {
                log: () => { }
            }
        });
    };

    beforeEach(() => {
        mockLogger();
        mockRequest = {
            statusCode: 0,
        };
        mockResponse = {
            statusCode: 0,
            send: jest.fn().mockImplementation((result) => {
                responseObject = result;
            })
        };
    });
    test('with a valid ID parameter', async () => {
        mockRequest = {
            ...mockRequest,
            params: {
                id: "123"
            }
        };

        const expectedStatusCode = 200;
        const expectedResponseObject = { user: { name: "David", age: "123" } };

        getAllUsers(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedResponseObject);
    });

    test('with a invalid ID parameter', async () => {
        const invalidIdParameter = "d1df23";
        mockRequest = {
            ...mockRequest,
            params: {
                id: invalidIdParameter
            }
        };

        const expectedStatusCode = 500;
        const expectedResponseObject = { error: `Invalid Id parameter: ${invalidIdParameter}` };

        getAllUsers(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedResponseObject);
    });
});