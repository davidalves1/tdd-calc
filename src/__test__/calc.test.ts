import { sum, sub, mult, div } from '../calc'

describe('Calc', () => {
  describe('sum', () => {
    it('should be 3 when a = 2 and b = 1', () => {
      const x = sum(2, 1)
      expect(x).toEqual(3)
    })

    it('should be 42 when a = 21 and b = 21', () => {
      const x = sum(21, 21)
      expect(x).toEqual(42)
    })
  })

  describe('sub', () => {
    it('should be 3 when a = 5 and b = 2', () => {
      const x = sub(5, 2)
      expect(x).toEqual(3)
    })

    it('should be -42 when a = 21 and b = 63', () => {
      const x = sub(21, 63)
      expect(x).toEqual(-42)
    })
  })

  describe('mult', () => {
    it('should be 9 when a = 3 and b = 3', () => {
      const x = mult(3, 3)
      expect(x).toEqual(9)
    })

    it('should be 42 when a = 7 and b = 6', () => {
      const x = mult(7, 6)
      expect(x).toEqual(42)
    })

    it('should be -10 when a = 5 and b = (-2)', () => {
      const x = mult(5, -2)
      expect(x).toEqual(-10)
    })
  })

  describe('div', () => {
    it('should be 2 when a = 6 and b = 3', () => {
      const x = div(6, 3)
      expect(x).toEqual(2)
    })

    it('should be 6 when a = 42 and b = 7', () => {
      const x = div(42, 7)
      expect(x).toEqual(6)
    })

    it('should be false when a = 10 and b = 0', () => {
      const x = div(10, 0)
      expect(x).toBe(false)
    })
  })
})
