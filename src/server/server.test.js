const request = require('supertest');
const server = require('./server'); // Import the server instance

describe('GET /', () => {
    afterAll(() => {
        server.close(); 
    });

    it('should respond with the index.html file', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toBe('text/html; charset=UTF-8');
    });
});
