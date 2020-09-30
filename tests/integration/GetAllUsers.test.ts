import app, { server } from '../../src/index';
import request from 'supertest';

jest.mock('../../src/middlewares/Authentication.middleware', () => jest.fn((req, res, next) => next()));

describe('Get all users request', () => {
    afterAll(() => {
        server.close();
    });

    test('with a valid ID parameter', async () => {
        const { status, text } = await request(app).get("/users/all/12");
        const expectedResponseObject = {
            user: {
                name: "David",
                age: "12"
            }
        };

        const expectedResponseStatusCode = 200;

        expect(status).toEqual(expectedResponseStatusCode);
        expect(text).toEqual(JSON.stringify(expectedResponseObject));
    });

    test('with an invalid ID parameter', async () => {
        const invalidIdParameter = "d12";
        const { status, text } = await request(app).get(`/users/all/${invalidIdParameter}`);
        const expectedResponseObject = {
            error: `Invalid Id parameter: ${invalidIdParameter}`
        };

        const expectedResponseStatusCode = 500;

        expect(status).toEqual(expectedResponseStatusCode);
        expect(text).toEqual(JSON.stringify(expectedResponseObject));
    });
});