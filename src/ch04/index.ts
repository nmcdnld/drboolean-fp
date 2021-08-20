var _ = require('ramda')

// ---------- Exercise 1 ----------
// Refactor to remove all arguments by partially applying the function.

// words :: String -> [String]
export const words = (str: string) => _.split(' ', str)
export const curriedWords = _.split(' ')

// ---------- Exercise 1a ----------
// Use map to make a new words fn that works on an array of strings.
export const sentences = _.map(curriedWords)

// ---------- Exercise 2 ----------
// Refactor to remove all arguments by partially applying the functions.
export const filterQs = (xs: string[]) => _.filter((x: string) => x.match(/q/i), xs)
export const curriedFilterQs = _.filter((a: string) => a.match(/q/i))
// "Real" solution
// export const curriedFilterQs = filter(match(/q/i));

// ---------- Exercise 3 ----------
// Considering the following function:
//
const keepHighest = (x: number, y: number) => (x >= y ? x : y);
//
// Refactor `max` to not reference any arguments using the helper function `keepHighest`.

// max :: [Number] -> Number
export const max = (xs: number[]) => _.reduce((acc: number, x: number) => (x >= acc ? x : acc), -Infinity, xs);
export const curriedMax = _.reduce(keepHighest, -Infinity)