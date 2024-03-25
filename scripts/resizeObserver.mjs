// Functions

// ============================== //
// Resize observer
// ============================== //
// Objectives
//   - specify any size using keywords
//   - specify any action or modifier for keyword
//
// Keywords:
// size/Size: Set container size
//  - size-{size} / size{Size} / ex: data-size-sm, sizeSm
//    - defines a size/width for change
//
// on/On: Set action for related size
//  - on-{size} / on{Size} / ex: data-on-sm, onSm
//    - defines the change for correlating {size} param
// ============================== //

import ResizeObserver from 'resize-observer-polyfill';
// import React, { useState, useEffect } from 'react';
// import ReactDOM from "react-dom";

export const modPrefix = 'pf-m-';

export const keywordChecker = (string, testValue) => {
  const value = '^' + testValue;
  const regex = new RegExp(value);

  return regex.test(string);
}

export const prependModifierPrefix = function (val) {
  return modPrefix + val.replace(' ', '');
};

export const stripWhitespace = function (val) {
  return val.replaceAll(' ', '');
}

export const stringToModifier = function (val) {
  return prependModifierPrefix(val).toLowerCase();
};

export const size = '^size';
export const on = '^on';
export const keywords = [size, on];

export function removeKeyword(data, array = keywords) {
  const prefix = new RegExp('^(' + array.join('|') + ')', 'g');
  data = data.replace(prefix, '').toLowerCase();

  return data;
}

export function stringToArray(data) {
  data = data.split(',');

  data.forEach((element, index) => {
    const val = prependModifierPrefix(element);
    data[index] = stripWhitespace(val);
  });

  return data;
}

export const buildDataObject = (...entries) => {
  const fullClassArray = [];

  for (const entry of entries) {
    const targetDataset = entry.dataset;
    const objectDataset = {};
    const sizes = [];

    for (const key in targetDataset) {
      if (keywordChecker(key, 'size')) {
        const newKey = removeKeyword(key);
        const size = targetDataset[key];
        objectDataset[newKey] = { containerSize: size };
        sizes.push(size);
      }

      if (keywordChecker(key, 'on') && removeKeyword(key) in objectDataset) {
        const newKey = removeKeyword(key);
        const classes = targetDataset[key];
        const classSetArray = stringToArray(classes);
        objectDataset[newKey].classSet = classSetArray;
        fullClassArray.push(newKey);
      }
    }

    entry.objectDataset = objectDataset;

    if (sizes.length) {
      entry.objectDataset.sizes = sizes;
    }

    if (fullClassArray.length) {
      entry.objectDataset.classSet = fullClassArray;
    }
  }

  console.log(fullClassArray);
}

export function throttle(f, delay) {
  let timer = 0;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => f.apply(this, args), delay);
  }
}

export const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const initialClasslist = entry.target.classList.value.split(' ');
    const contentBoxSize = entry.contentBoxSize[0];
    const inlineBoxSize = contentBoxSize.inlineSize;
    entry.target.dataset.currentSize = inlineBoxSize;

    for (const size in entry.target.objectDataset) {
      const currentSize = entry.target.objectDataset[size].containerSize;

      if (inlineBoxSize >= currentSize) {
        entry.target.dataset.newSize = size;
      }
    }

    const newSize = entry.target.dataset.newSize;
    const newClassList = entry.target.objectDataset[newSize].classSet;
    const joinedClasses = newClassList.concat(initialClasslist);


    /*
      get all classes applied by resize observer
      store to array before removing/adding classes, ensure class is part of resize observer array
      toggle classes that belong to RO classSet, are not static, and belong to current size
    */

    console.log(initialClasslist);
    console.log(newClassList);
    console.log(joinedClasses);
  }
});

export const pfResizeObserver = (entries, ...options) => {
  if (Array.isArray(entries)) {
    entries.forEach((entry, index) => {
      buildDataObject(entry);
      resizeObserver.observe(entry);
    });
  } else {
    buildDataObject(entries);
    resizeObserver.observe(entries);
  }
}
const basic1 = document.getElementById('basic-example1');
pfResizeObserver(basic1);
