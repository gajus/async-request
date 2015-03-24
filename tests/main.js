'use strict';

let chai,
    expect,
    nock,
    request;

chai = require('chai');
expect = chai.expect;
nock = require('nock');
request = require('../src/main.js');

describe('request', () => {
    beforeEach(() => {
        nock.disableNetConnect();
    });

    afterEach(() => {
        nock.enableNetConnect();
    });

    describe('request(url)', () => {
        it('makes HTTP GET request', async () => {
            let nrequest = nock('http://gajus.com')
                .get('/')
                .reply(200, '');

            await request('http://gajus.com/');

            expect(nrequest.isDone()).to.equal(true);
        });

        it('response defines body', async () => {
            let nrequest,
                response;

            nrequest = nock('http://gajus.com')
                .get('/')
                .reply(200, 'foo');

            response = await request('http://gajus.com/');

            expect(response.body).to.equal('foo');
        });

        it('response defines statusCode', async () => {
            let nrequest,
                response;

            nrequest = nock('http://gajus.com')
                .get('/')
                .reply(204);

            response = await request('http://gajus.com/');

            expect(response.statusCode).to.equal(204);
        });

        it('response defines headers', async () => {
            let nrequest,
                response;

            nrequest = nock('http://gajus.com')
                .get('/')
                .reply(200, '', {
                    foo: 'bar'
                });

            response = await request('http://gajus.com/');

            expect(response.headers).to.deep.equal({foo: 'bar'});
        });
    });

    describe('request(url, {})', () => {
        describe('when option is unknown', function () {
            it('throws an error', async () => {
                try {
                    await request('http://gajus.com/', {foo: 'bar'});
                } catch (e) {
                    expect(e.message).to.equal('Unknown option ("foo").');
                }
            });
        });

        describe('request(url, {method})', () => {
            it('makes HTTP request using the specified HTTP method', async () => {
                let nrequest = nock('http://gajus.com')
                    .delete('/')
                    .reply(200);

                await request('http://gajus.com/', {method: 'DELETE'});

                expect(nrequest.isDone()).to.equal(true);
            });

            describe('when method is unknown', () => {
                it('throws an error', async () => {
                    try {
                        await request('http://gajus.com/', {method: 'foobar'});
                    } catch (e) {
                        expect(e.message).to.equal('Unknown option.method value ("foobar").');
                    }
                });
            });
        });

        describe('request(url, {data})', () => {
            it('makes HTTP request using the specified HTTP data', async () => {
                let nrequest = nock('http://gajus.com')
                    .post('/', {foo: 'bar'})
                    .reply(200);

                await request('http://gajus.com/', {method: 'POST', data: {foo: 'bar'}});

                expect(nrequest.isDone()).to.equal(true);
            });
        });

        describe('request(url, {headers})', () => {
            it('makes HTTP request using the specified HTTP headers', async () => {
                let nrequest = nock('http://gajus.com')
                    .matchHeader('foo', 'bar')
                    .get('/')
                    .reply(200);

                await request('http://gajus.com/', {headers: {foo: 'bar'}});

                expect(nrequest.isDone()).to.equal(true);
            });
        });

        describe('request(url, {proxy})', () => {
            // nock does not allow testing proxy.
        });
    });
});
