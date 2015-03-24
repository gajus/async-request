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

    unknownOption = _.first(_.difference(_.keys(options), ["method", "data", "headers"]));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7OztBQUViLElBQUksUUFBUSxHQUFHLEVBQUU7SUFDYixRQUFRLFlBQUE7SUFDUixPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUM1QixDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUUxQixRQUFRLEdBQUcsb0JBQU8sR0FBRyxFQUFFLE9BQU87Ozs7b0RBQ25CLFVBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFLO0FBQzVCLDRCQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVsQywyQkFBTyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXZDLDJCQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFeEMsMkJBQU8sQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFLO0FBQ2xDLDRCQUFJLEtBQUssRUFBRTtBQUNQLGtDQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUMxQjs7QUFFRCwrQkFBTyxDQUFDO0FBQ0osc0NBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtBQUMvQixtQ0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO0FBQ3pCLGdDQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7eUJBQ3RCLENBQUMsQ0FBQztxQkFDTixDQUFDLENBQUM7aUJBQ04sQ0FBQzs7Ozs7OztDQUNMLENBQUM7O0FBRUYsUUFBUSxDQUFDLGVBQWUsR0FBRyxVQUFDLE9BQU8sRUFBSztBQUNwQyxRQUFJLGFBQWEsWUFBQSxDQUFDOztBQUVsQixRQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1YsZUFBTztLQUNWOztBQUVELGlCQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFdEYsUUFBSSxhQUFhLEVBQUU7QUFDZixjQUFNLElBQUksS0FBSyxDQUFDLG9CQUFtQixHQUFHLGFBQWEsR0FBRyxNQUFLLENBQUMsQ0FBQztLQUNoRTs7QUFFRCxRQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDOUYsY0FBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBZ0MsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQUssQ0FBQyxDQUFDO0tBQzlFO0NBQ0osQ0FBQzs7Ozs7QUFLRixRQUFRLENBQUMsVUFBVSxHQUFHLFVBQUMsT0FBTyxFQUFLO0FBQy9CLFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDVixlQUFPLE9BQU8sQ0FBQztLQUNsQjs7QUFFRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDZCxlQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7O0FBRTVCLGVBQU8sT0FBTyxDQUFDLElBQUksQ0FBQztLQUN2Qjs7QUFFRCxXQUFPLE9BQU8sQ0FBQztDQUNsQixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmxldCBBcmVxdWVzdCA9IHt9LFxuICAgIGFyZXF1ZXN0LFxuICAgIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0JyksXG4gICAgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5hcmVxdWVzdCA9IGFzeW5jICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgQXJlcXVlc3QudmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAgIG9wdGlvbnMgPSBBcmVxdWVzdC5tYXBPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAgIG9wdGlvbnMgPSBfLmFzc2lnbih7dXJsOiB1cmx9LCBvcHRpb25zKTtcblxuICAgICAgICByZXF1ZXN0KG9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICAgICAgICBib2R5OiByZXNwb25zZS5ib2R5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5BcmVxdWVzdC52YWxpZGF0ZU9wdGlvbnMgPSAob3B0aW9ucykgPT4ge1xuICAgIGxldCB1bmtub3duT3B0aW9uO1xuXG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1bmtub3duT3B0aW9uID0gXy5maXJzdChfLmRpZmZlcmVuY2UoXy5rZXlzKG9wdGlvbnMpLCBbJ21ldGhvZCcsICdkYXRhJywgJ2hlYWRlcnMnXSkpO1xuXG4gICAgaWYgKHVua25vd25PcHRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG9wdGlvbiAoXCInICsgdW5rbm93bk9wdGlvbiArICdcIikuJyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICYmIF8uaW5kZXhPZihbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdIRUFEJywgJ0RFTEVURSddLCBvcHRpb25zLm1ldGhvZCkgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBvcHRpb24ubWV0aG9kIHZhbHVlIChcIicgKyBvcHRpb25zLm1ldGhvZCArICdcIikuJyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBNYXAgb3B0aW9ucyB0byBtZWV0IHRoZSByZXF1ZXN0IGludGVyZmFjZS5cbiAqL1xuQXJlcXVlc3QubWFwT3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgICAgb3B0aW9ucy5mb3JtID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFyZXF1ZXN0O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9