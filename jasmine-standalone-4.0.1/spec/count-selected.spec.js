describe('countSelected', () => {
    it('should return zero if an array with no elements is passed in', () => {
        const array = [];
        const result = countSelected(array);

        expect(result).toBe(0)
    })
})