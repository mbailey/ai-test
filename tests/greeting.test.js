const { getGreeting, getFarewell } = require('../lib/greeting');

describe('Greeting Library', () => {
  describe('getGreeting function', () => {
    test('should return correct greeting with valid name', () => {
      expect(getGreeting('Jeannie')).toBe('Hello, Jeannie!');
      expect(getGreeting('World')).toBe('Hello, World!');
    });

    test('should throw error with empty name', () => {
      expect(() => getGreeting('')).toThrow('Name must be a non-empty string');
    });

    test('should throw error with non-string name', () => {
      expect(() => getGreeting(123)).toThrow('Name must be a non-empty string');
      expect(() => getGreeting(null)).toThrow('Name must be a non-empty string');
      expect(() => getGreeting(undefined)).toThrow('Name must be a non-empty string');
    });
  });

  describe('getFarewell function', () => {
    test('should return correct farewell with valid name', () => {
      expect(getFarewell('Jeannie')).toBe('Goodbye, Jeannie!');
      expect(getFarewell('World')).toBe('Goodbye, World!');
    });

    test('should throw error with empty name', () => {
      expect(() => getFarewell('')).toThrow('Name must be a non-empty string');
    });

    test('should throw error with non-string name', () => {
      expect(() => getFarewell(123)).toThrow('Name must be a non-empty string');
      expect(() => getFarewell(null)).toThrow('Name must be a non-empty string');
      expect(() => getFarewell(undefined)).toThrow('Name must be a non-empty string');
    });
  });
});