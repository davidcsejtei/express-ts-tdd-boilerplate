import getAllUsers from "./getAllUsers";
import { Request, Response } from "express";

import { getLogger } from '../loggers/loggerFactory';
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
        jest.clearAllMocks();
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
        mockRequest = {
            ...mockRequest,
            params: {
                id: "d1df23"
            }
        };

        const expectedStatusCode = 500;
        const expectedResponseObject = { error: "Invalid ID parameter" };

        getAllUsers(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.statusCode).toBe(expectedStatusCode);
        expect(responseObject).toEqual(expectedResponseObject);
    });
});