var
  where = 'client' 
;
Package.describe({
  name    : 'semantic:ui',
  summary : 'Semantic UI - LESS Release of Semantic UI',
  version : '{version}',
  git     : 'git:
});
Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('less', 'client');
  api.addFiles([
    {files}
  ], 'client');
});
