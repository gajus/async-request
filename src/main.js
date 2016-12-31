'use strict';

let Arequest,
    request = require('request'),
    _ = require('lodash');

request.debug = false;

Arequest = (defaultOptions) => {
    let arequest;

    arequest = async (url, options) => {
        return new Promise((resolve) => {
            options = _.assign({url: url}, options, defaultOptions);

            options = Arequest.mapOptions(options);

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

    arequest.defaults = (options) => {
        if (!options) {
            return defaultOptions;
        }

        if (options.cookieJar === true) {
            options.cookieJar = request.jar();
        }

        return Arequest(options);
    };

    return arequest;
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

    if (options.cookieJar) {
        options.jar = options.cookieJar;

        delete options.cookieJar;
    }

    return options;
};

module.exports = Arequest({});
