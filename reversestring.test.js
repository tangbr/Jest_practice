const reverseString = require('./reversestring');

test('reverseString function exists', () =>{
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

//
test('String reverses with Upercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});