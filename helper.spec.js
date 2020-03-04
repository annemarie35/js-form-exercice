import checkEmailIsValid from "./helper"
// import pour l'exercice pour éviter de mocker document pour le moment

describe('checkEmailIsValid', () => {
  describe('Valid email', () => {
    test('should contain one arobase', () => {
      expect(checkEmailIsValid('email')).toEqual(false)
    })

    test('should contain only one arobase', () => {
      expect(checkEmailIsValid('email@example@example')).toEqual(false)
    })

    test('should contain domain extension', () => {
      expect(checkEmailIsValid('email@example')).toEqual(false)
    })

    test('should contain an identifier', () => {
      expect(checkEmailIsValid('@example.net')).toEqual(false)
    })

    test('complete email', () => {
      expect(checkEmailIsValid('email@example.net')).toEqual(true)
    })
  })
})
