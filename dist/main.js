"use strict";

var _core = require("babel-runtime/core-js")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _this = this;

var Arequest = undefined,
    request = require("request"),
    _ = require("lodash");

Arequest = function (defaultOptions) {
    var arequest = undefined;

    arequest = function callee$1$0(url, options) {
        return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    return context$2$0.abrupt("return", new _core.Promise(function (resolve) {
                        Arequest.validateOptions(options);

                        options = Arequest.mapOptions(options);

                        options = _.assign({ url: url }, options);

                        request(options, function (error, response) {
                            if (error) {
                                throw new Error(error);
                            }

                            resolve({
                                statusCode: response.statusCode,
                                headers: response.headers,
                                body: response.body
                            });
                        });
                    }));

                case 1:
                case "end":
                    return context$2$0.stop();
            }
        }, null, _this);
    };

    arequest.defaults = function (options) {
        if (!options) {
            return defaultOptions;
        }

        return Arequest(options);
    };

    return arequest;
};

Arequest.validateOptions = function (options) {
    var unknownOption = undefined;

    if (!options) {
        return;
    }

    unknownOption = _.first(_.difference(_.keys(options), ["method", "data", "headers", "proxy"]));

    if (unknownOption) {
        throw new Error("Unknown option (\"" + unknownOption + "\").");
    }

    if (options.method && _.indexOf(["GET", "POST", "PUT", "HEAD", "DELETE"], options.method) === -1) {
        throw new Error("Unknown option.method value (\"" + options.method + "\").");
    }
};

/**
 * Map options to meet the request interface.
 */
Arequest.mapOptions = function (options) {
    if (!options) {
        return options;
    }

    if (options.data) {
        options.form = options.data;

        delete options.data;
    }

    return options;
};

module.exports = Arequest({});
//# sourceMappingURL=data:application/json;base64,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LENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgQXJlcXVlc3QsXG4gICAgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKSxcbiAgICBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbkFyZXF1ZXN0ID0gKGRlZmF1bHRPcHRpb25zKSA9PiB7XG4gICAgbGV0IGFyZXF1ZXN0O1xuXG4gICAgYXJlcXVlc3QgPSBhc3luYyAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgQXJlcXVlc3QudmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICBvcHRpb25zID0gQXJlcXVlc3QubWFwT3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgICAgICAgb3B0aW9ucyA9IF8uYXNzaWduKHt1cmw6IHVybH0sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICByZXF1ZXN0KG9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogcmVzcG9uc2UuYm9keVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhcmVxdWVzdC5kZWZhdWx0cyA9IChvcHRpb25zKSA9PiB7XG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFyZXF1ZXN0KG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYXJlcXVlc3Q7XG59O1xuXG5BcmVxdWVzdC52YWxpZGF0ZU9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xuICAgIGxldCB1bmtub3duT3B0aW9uO1xuXG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1bmtub3duT3B0aW9uID0gXy5maXJzdChfLmRpZmZlcmVuY2UoXy5rZXlzKG9wdGlvbnMpLCBbJ21ldGhvZCcsICdkYXRhJywgJ2hlYWRlcnMnLCAncHJveHknXSkpO1xuXG4gICAgaWYgKHVua25vd25PcHRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG9wdGlvbiAoXCInICsgdW5rbm93bk9wdGlvbiArICdcIikuJyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICYmIF8uaW5kZXhPZihbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdIRUFEJywgJ0RFTEVURSddLCBvcHRpb25zLm1ldGhvZCkgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBvcHRpb24ubWV0aG9kIHZhbHVlIChcIicgKyBvcHRpb25zLm1ldGhvZCArICdcIikuJyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYXAgb3B0aW9ucyB0byBtZWV0IHRoZSByZXF1ZXN0IGludGVyZmFjZS5cbiAqL1xuQXJlcXVlc3QubWFwT3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgICAgb3B0aW9ucy5mb3JtID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFyZXF1ZXN0KHt9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==