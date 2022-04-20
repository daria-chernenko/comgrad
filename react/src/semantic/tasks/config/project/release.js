var
  requireDotFile = require('require-dot-file'),
  config,
  npmPackage,
  version
;
try {
  config = requireDotFile('semantic.json');
}
catch(error) {}
try {
  npmPackage = require('../../../package.json');
}
catch(error) {
  npmPackage = {
    name: 'Unknown',
    version: 'x.x'
  };
}
version = (npmPackage && npmPackage.version !== undefined && npmPackage.name == 'semantic-ui')
  ? npmPackage.version
  : config.version
;
module.exports = {
  title      : 'Semantic UI',
  repository : 'https:
  url        : 'http:
  banner: ''
    + ' ' + '\n',
  version    : version
};
