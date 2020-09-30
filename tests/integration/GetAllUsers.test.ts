import app, { server } from '../../src/index';
import request from 'supertest';

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
});