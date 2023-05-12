import { stringify } from 'javascript-stringify';
import { nanoid } from 'nanoid';

function addQuote(value: string) {
  return `"${value}"`;
}

function getPatternsString(patterns: string[]) {
  return patterns.map(pattern => addQuote(pattern)).join(' ');
}

function getExtensionsPattern(extensions: string[]) {
  if (extensions.length === 0) {
    return '';
  }

  if (extensions.length === 1) {
    return extensions.join('');
  }

  return `{${extensions.join(',')}}`;
}

const id = nanoid();

function makeJavaScriptOnlyValue(str: string) {
  const obj = {};
  Object.defineProperty(obj, id, { enumerable: true, value: str });
  return obj;
}

function stringifyJavaScript(input: unknown) {
  return stringify(
    input,
    (value, _space, next) => {
      if (
        value &&
        typeof value === 'object' &&
        Object.prototype.hasOwnProperty.call(value, id)
      ) {
        const v = value as { [id: string]: string };
        return v[id];
      }
      return next(value);
    },
    2
  );
}

export {
  getExtensionsPattern,
  getPatternsString,
  makeJavaScriptOnlyValue,
  stringifyJavaScript,
};
