import bgMov from '../../styles/utils/bgMov'

test('verify if util works correctly', async () => {
  const [resultA, resultB, resultC, resultD] = [bgMov(45), bgMov(135), bgMov(225), bgMov(315)]
  expect(resultA.toString()).toBe('99,0,1,100,99,0')
  expect(resultB.toString()).toBe('0,1,100,99,0,1')
  expect(resultC.toString()).toBe('99,0,1,100,99,0')
  expect(resultD.toString()).toBe('0,1,100,99,0,1')
})
