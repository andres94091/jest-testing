const letterCount = require('../letterCount')

it ('works with regular strings', () => {
  expect(letterCount('awesome', 'e')).toBe(2)
})

it ('works with Capital letters', () => {
  expect(letterCount('AWESOME', 'e')).toBe(0)
})

