// cherry-picked from
// https://github.com/blakeembrey/change-case/blob/c24a0e18044bf77d9e824e93f04f7eb4e2151230/packages/no-case/src/index.ts#L19

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
const DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];

// Remove all non-word characters.
const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;

/**
 * Replace `re` in the input string with the replacement value.
 */
const replace = (input: string, re: RegExp | RegExp[], value: string) => {
  if (re instanceof RegExp) return input.replace(re, value);
  return re.reduce((input, re) => input.replace(re, value), input);
};

/**
 * Normalize the string into something other libraries can manipulate easier.
 */
export const noCase = (input: string, delimiter: string = " ") => {
  const splitRegexp = DEFAULT_SPLIT_REGEXP;
  const stripRegexp = DEFAULT_STRIP_REGEXP;

  const result = replace(
    replace(input, splitRegexp, "$1\0$2"),
    stripRegexp,
    "\0"
  );
  let start = 0;
  let end = result.length;

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === "\0") start++;
  while (result.charAt(end - 1) === "\0") end--;

  // Transform each token independently.
  return result
    .slice(start, end)
    .split("\0")
    .map(str => str.toLowerCase())
    .join(delimiter);
};

export const dotCase = (input: string, delimiter?: string) => {
  return noCase(input, delimiter || ".");
};

export const kebabCase = (input: string, delimiter?: string) => {
  return noCase(input, delimiter || "-");
};
