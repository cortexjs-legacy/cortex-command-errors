'use strict';

module.exports = function (logger) {
  return function (err) {
    if (err instanceof Error) {
      // loggie will deal with `Error` instances
      logger.fatal(err);

      // error code
    } else if (typeof err === 'number') {
      logger.fatal(err, 'Not ok, exit code: ' + err);

    } else {
      logger.fatal(err.exitcode, err.message || err);
    }
  };
};
