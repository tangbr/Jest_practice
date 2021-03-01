const functions = require('./functions');

//beforeEach(() => initDatabase());
//afterEach(() => closeDatabase());
/* 
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());


const initDatabase = () => console.log('Database Initialized...');
const closeDatabase = () => console.log('Database Closed...');
 */

const nameCheck = () => console.log('Checking Name....');
describe('Checking Names', () => {
    beforeEach(() => nameCheck());
    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});
// to Be falsy
test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

//toEqual
test('User should be Bruce Tang object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Bruce', lastName: 'Tang' });
});

//Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test('There is no I in team', () => {
    expect('teami').toMatch(/I/i);  //or .not.toMatch
});

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

//     Promise
/* test('User fetched name should be Leanne Graham', () => {
    //expect.assertions(1);
    //functions.fetchUser()
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
}); */

// Async Await
test('User fetched name should be Leanne Graham', async () => {

    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});