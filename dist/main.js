"use strict";

var _core = require("babel-runtime/core-js")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _this = this;

var Arequest = {},
    arequest = undefined,
    request = require("request"),
    _ = require("lodash");

arequest = function callee$0$0(url, options) {
    return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                return context$1$0.abrupt("return", new _core.Promise(function (resolve) {
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
                return context$1$0.stop();
        }
    }, null, _this);
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

module.exports = arequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7OztBQUViLElBQUksUUFBUSxHQUFHLEVBQUU7SUFDYixRQUFRLFlBQUE7SUFDUixPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUM1QixDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUUxQixRQUFRLEdBQUcsb0JBQU8sR0FBRyxFQUFFLE9BQU87Ozs7b0RBQ25CLFVBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFLO0FBQzVCLDRCQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVsQywyQkFBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXZDLDJCQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFeEMsMkJBQU8sQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFLO0FBQ2xDLDRCQUFJLEtBQUssRUFBRTtBQUNQLGtDQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUMxQjs7QUFFRCwrQkFBTyxDQUFDO0FBQ0osc0NBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtBQUMvQixtQ0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO0FBQ3pCLGdDQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7eUJBQ3RCLENBQUMsQ0FBQztxQkFDTixDQUFDLENBQUM7aUJBQ04sQ0FBQzs7Ozs7OztDQUNMLENBQUM7O0FBRUYsUUFBUSxDQUFDLGVBQWUsR0FBRyxVQUFDLE9BQU8sRUFBSztBQUNwQyxRQUFJLGFBQWEsWUFBQSxDQUFDOztBQUVsQixRQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1YsZUFBTztLQUNWOztBQUVELGlCQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9GLFFBQUksYUFBYSxFQUFFO0FBQ2YsY0FBTSxJQUFJLEtBQUssQ0FBQyxvQkFBbUIsR0FBRyxhQUFhLEdBQUcsTUFBSyxDQUFDLENBQUM7S0FDaEU7O0FBRUQsUUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQzlGLGNBQU0sSUFBSSxLQUFLLENBQUMsaUNBQWdDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFLLENBQUMsQ0FBQztLQUM5RTtDQUNKLENBQUM7Ozs7O0FBS0YsUUFBUSxDQUFDLFVBQVUsR0FBRyxVQUFDLE9BQU8sRUFBSztBQUMvQixRQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1YsZUFBTyxPQUFPLENBQUM7S0FDbEI7O0FBRUQsUUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ2QsZUFBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDOztBQUU1QixlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDdkI7O0FBRUQsV0FBTyxPQUFPLENBQUM7Q0FDbEIsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgQXJlcXVlc3QgPSB7fSxcbiAgICBhcmVxdWVzdCxcbiAgICByZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpLFxuICAgIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuYXJlcXVlc3QgPSBhc3luYyAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIEFyZXF1ZXN0LnZhbGlkYXRlT3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgICBvcHRpb25zID0gQXJlcXVlc3QubWFwT3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgICBvcHRpb25zID0gXy5hc3NpZ24oe3VybDogdXJsfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmVxdWVzdChvcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiByZXNwb25zZS5zdGF0dXNDb2RlLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgYm9keTogcmVzcG9uc2UuYm9keVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuQXJlcXVlc3QudmFsaWRhdGVPcHRpb25zID0gKG9wdGlvbnMpID0+IHtcbiAgICBsZXQgdW5rbm93bk9wdGlvbjtcblxuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdW5rbm93bk9wdGlvbiA9IF8uZmlyc3QoXy5kaWZmZXJlbmNlKF8ua2V5cyhvcHRpb25zKSwgWydtZXRob2QnLCAnZGF0YScsICdoZWFkZXJzJywgJ3Byb3h5J10pKTtcblxuICAgIGlmICh1bmtub3duT3B0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBvcHRpb24gKFwiJyArIHVua25vd25PcHRpb24gKyAnXCIpLicpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm1ldGhvZCAmJiBfLmluZGV4T2YoWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnSEVBRCcsICdERUxFVEUnXSwgb3B0aW9ucy5tZXRob2QpID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gb3B0aW9uLm1ldGhvZCB2YWx1ZSAoXCInICsgb3B0aW9ucy5tZXRob2QgKyAnXCIpLicpO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWFwIG9wdGlvbnMgdG8gbWVldCB0aGUgcmVxdWVzdCBpbnRlcmZhY2UuXG4gKi9cbkFyZXF1ZXN0Lm1hcE9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICAgIG9wdGlvbnMuZm9ybSA9IG9wdGlvbnMuZGF0YTtcblxuICAgICAgICBkZWxldGUgb3B0aW9ucy5kYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcmVxdWVzdDtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==