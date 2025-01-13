const anagram = require('./anagram')

describe('anagram', () => {
    it('returns true if strings are anagrams', () => {
        expect(anagram('listen', 'silent')).toBe(true)
    })
    it('returns false if strings are not anagrams', () => {
        expect(anagram('listen', 'silentt')).toBe(false)
    })
})