// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing'

// complete the function
const solution = string => string.replace(/[A-Z]/g, letter => ' '+letter)
