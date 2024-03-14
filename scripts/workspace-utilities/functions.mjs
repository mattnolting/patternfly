import { patternflyNamespace, patternflyVersion } from '../init.mjs'

export const objectConstructor = function (obj) {
  if (!this[obj]) {
    this[obj] = { };
  }
}

// ======================================================================================
// stringToLower: is a helper function that transforms a string to lowercase
// ======================================================================================
export const stringToLower = function (string) {
  const newString = string.toLowerCase();
  return newString;
}

export const setRoot = function (root) {
  objectConstructor('root');
}

// ======================================================================================
// array: creates array from string
// ======================================================================================
//
// Props:
//  - First parameter is the function call
//  - array: can be anonymous or named
//  - array items: space separated (no comma separated)
//
// Usage:
//   {{> myPartial (array 'Hello World' true 2 '3')}}
//   {{> myPartial namedArray=(array 'Hello World' true 2 '3' (object name='Marty' age=41 int=1))
//
// Debug:
//   {{#> myPartial (array 'Hello World' true 2 '3')}}
//     {{debug}}
//   {{/myPartial}}
//
// ======================================================================================
export const array = function () {
  return Array.prototype.slice.call(arguments, 0, -1);
};

// ======================================================================================
// object: creates object from key: val
// ======================================================================================
//
// Props:
//  - First parameter is the function call
//  - object: can be anonymous or named
//
// Object entries:
//  - key value pairs ex: key=value
//  - object space separated (no comma separated)
//  - key-value separator is = rather than :
//
// Usage:
//   {{> myPartial (object name='Marty' age=41 int=1}}
//   {{> myPartial namedObj=(object name='Marty' age=40 array_example=(array 'Hello World' true 2 '3'))}}
//
// ======================================================================================
export const object = function ({ hash }) {
  return hash;
};

export const print = function () {
  return this;
};

// TODO: extend this function, simplify and clafiry params. Prefix should be built from individual params
export const pfPrefixConstructor = function (...terms) {
  let className = '';
  let firstPass = true;

  // to reset the keyword, pass 'noNamespace', 'noVersion', 'noType'... resets follow this pattern no + (capitalized) Keyword
  const keywords = {
    namespace: patternflyNamespace,
    version: patternflyVersion,
    type: 'c'
  }

  for (const term in terms) {
    // if string start swith no and is not all lowercase, consider it a keyword that should be set to ''
    if (term.startsWith('no') && term !== term.toLowerCase()) {
      keywords[term.split('no').pop().toLowerCase()] = '';
    }

    if (term.startsWith('type') && term !== term.toLowerCase()) {
      keywords[term.split('type').pop().toLowerCase()] = '';
    }

    terms.forEach((term) => {
      className = (!firstPass ? '-' + term : '' + term);
    }, firstPass = false);
  }

  const prefix = keywords.namespace + keywords.version + keywords.type + className;
  return prefix;
};

export const extendRoot = function (extension, options) {
  return this.root + '__' + extension;
}

export const classConfig = function (...map) {
  const objectName = this.root + '-classlist';
  if (!this[objectName]) { this[objectName] = { }; }

  this[objectName]['root-class'] = this.root;

  map.forEach((item, i) => {
    this[objectName][item.key] = item.value;
  });
}
