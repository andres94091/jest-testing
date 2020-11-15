it('should do arithmetic', () => {
  expect(4+4).toBeGreaterThan(7)
  expect(4+4).toBeLessThan(9)
})

it ('should do references', () => {
  const arr = [1,2,3]
  expect(arr).toEqual([1,2,3])
  expect(arr).not.toBe([1,2,3])
  expect(arr).toContain(1)
})