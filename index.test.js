const isAnagrams = require('./index')

test('Функция должна возвращать true, если строки являются анаграммами', () => {
    expect(isAnagrams('melon', 'lemon')).toBe(true)
    expect(isAnagrams('lemon', 'melon')).toBeTruthy()
    expect(isAnagrams('lemon', 'mmmelo')).toBeFalsy()
    expect(isAnagrams('kilso', 'osilk')).toBeTruthy()
    expect(isAnagrams('melon', 'melon')).toBe(true)
    expect(isAnagrams('MELON', 'lEmon')).toBe(true)
    expect(isAnagrams('abcde2', 'c2abed')).toBeTruthy()
})

test('Функция должна быть определена', () => {
    expect(isAnagrams('melon', 'lemon')).toBeDefined()
})