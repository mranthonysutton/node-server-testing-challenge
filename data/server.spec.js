const request = require('supertest');
const server = require('./server');

describe('server.js', function() {
  // checks that the test environment variable is running
  describe('environment', function() {
    it('should set environment to testing', function() {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });

  describe('GET /', function() {
    it('Should return a 200 OK', function() {
      return request(server)
        .get('/')
        .then(response => {
          expect(response.status).toBe(200);
        });
    });

    it('should return {api: "Is up and running..."}', function() {
      return request(server)
        .get('/')
        .then(response => {
          expect(response.body.api).toBe('Is up and running...');
        });
    });
  });

});
