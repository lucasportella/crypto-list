import { expect, test, describe, } from 'vitest'
import { formatDollarValue, formatHour } from './formatString'


describe('formatDollarValue', () => {
  test('without decimals', () => {
    expect(formatDollarValue(33)).toBe("33")
  })
  test('with decimals', () => {
    expect(formatDollarValue(33.34)).toBe("33.34")
  })
})

describe('formatHour function TEST', () => {
  test('first timestamp ever', () => {
    expect(formatHour(1)).toBe('09:00 PM')
  })
  test('formatHour from date 03/21/2024 at 16:17', () => {
    expect(formatHour(1711048563)).toBe('04:17 PM')
  })
})

