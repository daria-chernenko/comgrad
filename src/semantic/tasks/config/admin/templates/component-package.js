Package.describe({
  name    : 'semantic:ui-{component}',
  summary : 'Semantic UI - {Component}: Single component release',
  version : '{version}',
  git     : 'git:
});
Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    {files}
  ], 'client');
});
