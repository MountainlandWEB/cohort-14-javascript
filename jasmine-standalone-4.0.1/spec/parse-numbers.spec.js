describe('parseNumbers', () => {
  it('should return an empty array if parameters are not parsable', () => {
    const result = parseNumbers('ty', '0p', 'yu', '9L');
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
    expect(result.length).toBe(0);
  });
  it('should return an array with a 15 if "15" is passed in', () => {
    const result = parseNumbers('15');
    expect(result.length).toBe(1);
    expect(result[0]).toBe(15);
  });
  it('should return an array with a 15, 34, and 12 if "15", "34", "tr", and "12" is passed in', () => {
    const result = parseNumbers('15', '34', 'tr', '12');
    expect(result.length).toBe(3);
    expect(result[0]).toBe(15);
    expect(result[1]).toBe(34);
    expect(result[2]).toBe(12);
  });
});
