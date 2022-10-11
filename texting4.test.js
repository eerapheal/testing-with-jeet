const capitalize = require('./texting4')

test('expected the string to be capitalized = "Apple" ', () => {
    //Arrange
    const str = 'apple';
    //Act 
    const capitalizedStr = capitalize(str);
    //Assert
    expect(capitalizedStr).toBe('Apple');
  })