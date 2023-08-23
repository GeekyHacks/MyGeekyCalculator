describe('operate', () => {
  it('throws an error for a non-string input', () => {
    expect(() => strLength(42)).toThrow('Input must be a string');
    expect(() => strLength(null)).toThrow('Input must be a string');
    expect(() => strLength(undefined)).toThrow('Input must be a string');
    expect(() => strLength({ key: 'value' })).toThrow('Input must be a string');
  });
  it('throws an error for an empty string', () => {
    expect(() => strLength('')).toThrow('String is empty');
  });

  describe('Addition', () => {
    it('Add numberOne to numberTwo', () => {
      expected();
    });
  });
});
