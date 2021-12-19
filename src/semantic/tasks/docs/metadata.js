var
  console      = require('better-console'),
  fs           = require('fs'),
  YAML         = require('yamljs')
;
var data = {};
function startsWith(str, prefix) {
  return str.indexOf(prefix) === 0;
};
function inArray(needle, haystack) {
  var length = haystack.length;
  for(var i = 0; i < length; i++) {
      if(haystack[i] == needle) return true;
  }
  return false;
}
function parser(file, callback) {
  if(file.isNull()) {
    return callback(null, file); 
  }
  if(file.isStream()) {
    return callback(new Error('Streaming not supported'));
  }
  try {
    var
      text     = String(file.contents.toString('utf8')),
      lines    = text.split('\n'),
      filename = file.path.substring(0, file.path.length - 4),
      key      = 'server/documents',
      position = filename.indexOf(key)
    ;
    if(!lines) {
      return;
    }
    if(position < 0) {
      return callback(null, file);
    }
    filename = filename.substring(position + key.length + 1, filename.length);
    var
      lineCount = lines.length,
      active    = false,
      yaml      = [],
      categories = [
        'UI Element',
        'UI Global',
        'UI Collection',
        'UI View',
        'UI Module',
        'UI Behavior'
      ],
      index,
      meta,
      line
    ;
    for(index = 0; index < lineCount; index++) {
      line = lines[index];
      if(!active) {
        if(startsWith(line, '---')) {
          active = true;
        }
        continue;
      }
      if(startsWith(line, '---')) {
        break;
      }
      yaml.push(line);
    }
    meta = YAML.parse(yaml.join('\n'));
    if(meta && meta.type && meta.title && inArray(meta.type, categories) ) {
      meta.category = meta.type;
      meta.filename = filename;
      meta.url      = '/' + filename;
      meta.title    = meta.title;
      data[meta.element] = meta;
    }
    else {
    }
  }
  catch(error) {
    console.log(error, filename);
  }
  callback(null, file);
}
module.exports = {
  result : data,
  parser : parser
};
