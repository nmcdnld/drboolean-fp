import {
  words,
  curriedWords,
  sentences,
  filterQs,
  curriedFilterQs,
  max,
  curriedMax
} from './index'

describe('exercise 1', () => {
  test('given', () => {
    expect(
      words('Jingle bells Batman smells')
    ).toEqual(['Jingle', 'bells', 'Batman', 'smells'])
  })
  
  test('curried func splits sentence as expected', () => {
    expect(
      curriedWords('Jingle bells Batman smells')
    ).toEqual(['Jingle', 'bells', 'Batman', 'smells'])
  })
})

describe('exercise 1a', () => {
  test('curried func works on array of strings', () => {
    expect(
      sentences(['Jingle bells Batman smells', 'foo bar'])
    ).toEqual([['Jingle', 'bells', 'Batman', 'smells'], ['foo', 'bar']])
  })
})

describe('exercise 2', () => {
  test('given', () => {
    expect(
      filterQs(['quick', 'camels', 'quarry', 'over', 'quails'])
    ).toEqual(['quick', 'quarry', 'quails'])
  })
  
  test('curried func filters Qs as expected', () => {
    expect(
      curriedFilterQs(['quick', 'camels', 'quarry', 'over', 'quails'])
    ).toEqual(['quick', 'quarry', 'quails'])
  })
})

describe('exercise 3', () => {
  test('given', () => {
    expect(
      max([323, 523, 554, 123, 5234])
    ).toEqual(5234)
  })
  
  test('curried func filters Qs as expected', () => {
    expect(
      curriedMax([323, 523, 554, 123, 5234])
    ).toEqual(5234)
  })
})