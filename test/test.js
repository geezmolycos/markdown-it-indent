'use strict';


var path     = require('path');
var generate = require('markdown-it-testgen');

/*eslint-env mocha*/

describe('markdown-it-indent', function () {
  var md = require('markdown-it')()
    .use(require('../'));

  generate(path.join(__dirname, 'fixtures/indent.txt'), md);
});
