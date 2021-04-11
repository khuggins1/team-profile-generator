const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer('Craig', 13, 'craig@mytest.com', 'craig14');

    expect (engineer.name).toBe('Craig');
    expect (engineer.id).toBe(13);
    expect (engineer.email).toBe('craig@mytest.com');
    expect (engineer.gitHub).toBe('craig14');
})
test('gets the Engineer name', () => {
    const engineer = new Engineer('Craig', 13, 'craig@mytest.com', 'craig14');
    expect(engineer.getName()).toEqual(expect.stringContaining('Craig'));
})
test('gets the Engineer ID', () => {
    const engineer = new Engineer('Craig', 13, 'craig@mytest.com', 'craig14');
    expect(engineer.getId()).toBe(13);
})
test('gets the Engineer email', () => {
    const engineer = new Engineer('Craig', 13, 'craig@mytest.com', 'craig14');
    expect(engineer.getEmail()).toEqual(expect.stringContaining('craig@mytest.com'));
})
test('gets the Engineer role', () => {
    const engineer = new Engineer('Craig', 13, 'craig@mytest.com', 'craig14');
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})
test('gets the Engineer gitHub username', () => {
    const engineer = new Engineer('Craig', 13, 'craig@mytest.com', 'craig14');
    expect(engineer.getGitHub()).toEqual(expect.stringContaining('craig14'));
})