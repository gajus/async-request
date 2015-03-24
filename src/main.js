'use strict';

let Arequest = {},
    arequest,
    request = require('request'),
    _ = require('lodash');

arequest = async (url, options) => {
    return new Promise((resolve) => {
        Arequest.validateOptions(options);

        options = Arequest.mapOptions(options);

        options = _.assign({url: url}, options);

        request(options, (error, response) => {
            if (error) {
                throw new Error(error);
            }

            resolve({
                statusCode: response.statusCode,
                headers: response.headers,
                body: response.body
            });
        });
    });
};

Arequest.validateOptions = (options) => {
    let unknownOption;

    if (!options) {
        return;
    }

    unknownOption = _.first(_.difference(_.keys(options), ['method', 'data', 'headers', 'proxy']));

    if (unknownOption) {
        throw new Error('Unknown option ("' + unknownOption + '").');
    }

    if (options.method && _.indexOf(['GET', 'POST', 'PUT', 'HEAD', 'DELETE'], options.method) === -1) {
        throw new Error('Unknown option.method value ("' + options.method + '").');
    }
};

/**
 * Map options to meet the request interface.
 */
Arequest.mapOptions = (options) => {
    if (!options) {
        return options;
    }

    if (options.data) {
        options.form = options.data;

        delete options.data;
    }

    return options;
};

module.exports = arequest;
