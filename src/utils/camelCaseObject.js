import camelCase from 'lodash/string/camelCase';

function camelCaseObject(obj) {
  var build, key, destKey, value;

  if (obj instanceof Array) {
    build = [];
    for (key in obj) {
      value = obj[key];

      if (typeof value === 'object') {
        value = camelCaseObject(value);
      }
      build.push(value);
    }
  } else {
    build = {};
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        destKey = camelCase(key);
        value = obj[key];
        if (value !== null && typeof value === 'object') {
          value = camelCaseObject(value);
        }

        build[destKey] = value;
      }
    }
  }
  return build;
}

module.exports = camelCaseObject;
