'use strict';

module.exports = handler;


function handler (options) {
  var logger = options.logger;
  var harmony = options.harmony;
  var notify = options.notify;

  return function (err) {
    var message;
    var code;

    if (err instanceof Error) {
      // loggie will deal with `Error` instances
      message = err;
      code = 1;

      // error code
    } else if (typeof err === 'number') {
      message = 'Not ok, exit code: ' + err;
      code = err;

    } else {
      message = err.message || err;
      code = err.exitcode || 1;
    }

    if (notify) {
      var Notification = require('node-notifier');
      var notifier = new Notification();
      notifier.notify({
          message: message
      });
    }

    logger.fatal(message, harmony ? false : code);
  };
};
