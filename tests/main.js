'use strict';

let chai,
    expect,
    request;

chai = require('chai');
expect = chai.expect;
request = require('../src/main.js');

/*describe('mysql.connect()', async () => {
    it('it connects to the database', async () => {
        let connection;

        connection = await mysql.connect({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });
    });
    describe('if connection cannot be established', () => {
        it('throws an error', async () => {
            try {
                await mysql.connect({
                    host: 'INVALID_HOST'
                });
            } catch (e) {
                expect(e.message).to.equal('Error: getaddrinfo ENOTFOUND INVALID_HOST INVALID_HOST:3306');
            }
        });
    });
});

describe('connection.query()', async () => {
    let connection;

    beforeEach(async () => {
        connection = await mysql.connect({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });
    });

    it('makes a query and return results', async () => {
        let rows = await connection.query('SELECT 1');

        expect(rows).to.deep.equal([{'1': 1}]);
    });

    describe('if query cannot be made', () => {
        it('throws an error', async () => {
            try {
                await connection.query('INVALID_QUERY');
            } catch (e) {
                expect(e.message).to.equal('Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \'INVALID_QUERY\' at line 1');
            }
        });
    });
});*/
