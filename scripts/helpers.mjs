import { patternflyNamespace, patternflyVersion } from './init.mjs';
import * as functions from './workspace-utilities/functions.mjs';

/** Ignore the object appended by handlebars. */
export const concat = (...params) => {
  if (typeof params[params.length - 1] === 'object') {
    params.pop();
  }
  return params.join('');
};

export const removeWhiteSpaceForPrettier = () => {
  return 'removeWhiteSpaceForPrettier';
};

/** Using ifEquals else if with helpers
{{#ifEquals toolbar-toggle--IsExpanded "false"}}
  false
{{else ifEquals toolbar-toggle--IsExpanded "true"}}
  true
{{else}}
  something else
{{/ifEquals}}
*/
export const ifEquals = function () {
  const args = Array.prototype.slice.call(arguments, 0, -1);
  const options = arguments[arguments.length - 1];
  const allEqual = args.every(function (expression) {
    return args[0] === expression;
  });

  return allEqual ? options.fn(this) : options.inverse(this);
};

// Using ifAny else if with helpers
// {{#ifAny A B C}}
//   this if A or B or C
// {{else ifAny D E}}
//   this if D or E
// {{else}}
//   something else
// {{/ifAny}}

export const ifAny = function () {
  const args = Array.prototype.slice.call(arguments, 0, -1);
  const options = arguments[arguments.length - 1];
  const anyTruthy = args.some(arg => arg);

  return anyTruthy ? options.fn(this) : options.inverse(this);
};

/** Using ternary
if custom value for select--width: {{#> select select--width='160px'}}Filter by name{{/select}}
else custom value for select--width: {{#> select)}}Filter by name{{/select}}
{{#> select select--id=(concat toolbar--id '-select-name') select--width=(ternary toolbar-items-search-filter--width toolbar-items-search-filter--width '175px') select-toggle--icon="fas fa-filter"}}
{{> toolbar-item-search-filter toolbar-items-search-filter--width="300px"}}
*/

// ======================================================================================
// debug: is a helper function that logs all parameters and their values, if defined to the console
// ======================================================================================
//
// Usage:
//   {{#> component}}
//     {{debug}}
//     {{debug component--id}}
//
// Options:
//     Can request a specific value to be logged. `component--id` is requested on the second line
// ======================================================================================
export const debug = function (optionalValue) {
  console.log('Current Context');
  console.log('====================');
  console.log(this);
  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
}

// ======================================================================================
// stringToLower: is a helper function that transforms a string to lowercase
// ======================================================================================
export const stringToLower = function (string) {
  const newString = string.toLowerCase();
  return newString;
}

// ======================================================================================
// dasherize: is a helper function that removes punctuaation and spaces from a string and replaces them with dashes
// ======================================================================================
export const dasherize = (...params) => {
  let newString = '';

  params.forEach(function(element) {
    if (typeof element === 'string') {
      newString += element.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
    }
  });

  return newString.replace(' ', '-');
};

// ======================================================================================
// setTag: is a helper function that sets the tag of a component
// ======================================================================================
//
// Usage:
//   {{> setTag component--IsList 'ul' 'div'}}
//   {{> setTag component--IsList 'ul'}} // can also be used a the fallback value is div
//
// ======================================================================================
export const setTag = function (partialVar, el, fallback = 'div') {
  if (partialVar !== undefined) {
    this.type = el;
  } else {
    this.type = fallback;
  }
};

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

// ======================================================================================
// has: is a function that returns an object with three properties: any, all, none
//      these properties are boolean values that represent the state of the passed value
// ======================================================================================
export const has = function (value) {
  const result = {};

  if (Array.isArray(value)) {
    result.any = value.includes(true);
    result.all = value.every(element => element === true);
    result.none = value.every(value => !value);
  } else if (value !== undefined && value === true) {
    result.any = true;
    result.all = true;
    result.none = false;
  } else {
    result.any = false;
    result.all = false;
    result.none = true;
  }

  return result;
}

export const returnHas = function (value, keyword, fallback) {
  const compValue = has(value);
  const boolResult = compValue[keyword];

  if (boolResult === true && fallback !== undefined) {
    return fallback;
  } else {
    return boolResult;
  }
}

// Truthy functions
// ======================================================================================
// hasAny/All/None: is a helper function that returns the value of a propterty or array
// these properties are boolean values that represent the state of the passed value
// optional string value can be returned if true
// ======================================================================================
//
// Usage:
//   {{#> component}}
//     {{hasAny (array component--IsExpanded component--IsCurrent component--IsActive)}}
//     returns: result[any: true/false, all: true/false, none: true/false]
//
// Options:
//     Can request a specific value to be logged. `component--id` is requested on the second line
// ======================================================================================
export const hasAny = function (value, fallback = '') {
  return returnHas(value, 'any', fallback);
}

export const hasAll = function (value, fallback = '') {
  return returnHas(value, 'all', fallback);
}

export const hasNone = function (value, fallback = '') {
  return returnHas(value, 'none', fallback);
}

// ======================================================================================
// tag: is a helper function that returns the tag of a component
// ======================================================================================
//
// Usage:
//   {{#> tag}}
//     {{debug}}
//     {{debug component--id}}
//
// Options:
//     Can request a specific value to be logged. `component--id` is requested on the second line
// ======================================================================================
export const tag = function (tag) {
  return this.type;
};

// ======================================================================================
// tag: is a helper function that returns the tag of a component
// ======================================================================================
//
// Usage:
//   {{#> tag}}
//     {{debug}}
//     {{debug component--id}}
//
// Options:
//     Can request a specific value to be logged. `component--id` is requested on the second line
// ======================================================================================
export const print = function () {
  return this;
};

// ======================================================================================
// setModifier: is a helper function that sets a modifier class
// ======================================================================================
export const setModifier = function (param, className) {
  return param ? className : '';
};

// ======================================================================================
// setAttribute: is a helper function that sets an attribute
// ======================================================================================
export const setAttribute = function (param, attribute) {
  return param ? attribute : null;
};

// ======================================================================================
// reset: reset is a helper function unsets all passed parameters
// ======================================================================================
//
// Purpose: replaces `newcontext` helper in partials by unsetting specific parameters
// Usage:
//   {{#> component (reset component--id component--IsExpanded)}}
//
// ======================================================================================
export const reset = function (...params) {
  params.forEach(element => {
    element = undefined;
  })
};

// ======================================================================================
// setModifiers: setModifiers is a helper function that returns a string of all partials parameters that are true
// ======================================================================================
//
// Purpose: replaces repetitive {{#if component-IsState}}pf-m-state{{/if}} statements in partials
// Usage:
//   {{setModifiers
//     component-IsExpanded='pf-m-expanded' // if component-IsExpanded is assigned to instance, return pf-m-expanded
//     component-IsActive='pf-m-active' // if component-IsActive is assigned to instance, return pf-m-active
//     component-IsCurrent='pf-m-current pf-m-selected' // if component-IsCurrent is assigned to instance, return pf-m-current and pf-m-selected
//   }}
//
// ======================================================================================
export const setModifiers = function (...mods) {
  let modSet = '';

  for (const prop in mods) {
    const hash = mods[prop].hash;
    for (const [key, value] of Object.entries(hash)) {
      if (this[key]) {
        modSet += ` ${value}`;
      }
    }
  };

  return modSet;
};

/** Helper which allows a booleans value to be inversed, similar to how notting a variable with ! works in regular JS */
export const inverse = (bool) => (bool ? null : 'true');

export const pfv = (type) => {
  const namespace = patternflyNamespace;
  let version = patternflyVersion;
  let prefix = 'c-';

  if (type === 'unset-prefix') {
    prefix = '';
  } else if (type === 'unset-version') {
    version = '';
  } else if (type.length) {
    prefix = type + '-';
  }

  return namespace + version + prefix;
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

export const list = function (str) {
  return str.split(';');
}

export const pfPrefix = function (term) {
  const prefix = pfPrefixConstructor(term);
  return prefix;
}

export const pfVar = function (term) {
  const varName = '--' + pfPrefixConstructor(term);
  return varName;
}

export const pfClass = function (term) {
  const className = '.' + pfPrefixConstructor(term);
  return className;
}

export const styles = function (...params) {
  params.forEach(function(item) {
    return item;
  });
}

export const inlineStyle = function (prop, val) {
  return prop + ': ' + val + ';';
}

// TODO: create helper to look for `Is` then camelcase to return boolean with the need for `true`
export const ternary = (testValue, trueValue, fallback) => {
  return testValue ? trueValue : fallback;
};

export const keyValue = function (key, value) {
  return { key, value };
}

export const entry = function (key, value) {
  return { key, value };
}

export const ifTruthy = (...params) => {
  for (const param in params) {
    const testVal = params[param].key;
    const returnValue = params[param].value;

    if (testVal) {
      return returnValue;
    }
  }
}

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

export const init = function (options) {
  console.log(this, options);
  functions.setRoot(pfPrefix(options.root));
  // return this.options;
}
