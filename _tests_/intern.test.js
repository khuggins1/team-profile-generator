const Intern = require('../lib/intern');

test('creates a Intern object', () => {
    const intern = new Intern('Kevin', 25, 'kevin@mytest.com', 'UCLA');

    expect(intern.name).toBe('Kevin');
    expect(intern.id).toBe(25);
    expect(intern.email).toBe('kevin@mytest.com');
    expect(intern.school).toBe('UCLA');
})
test('gets the Intern name', () => {
    const intern = new Intern('Kevin', 25, 'kevin@mytest.com', 'UCLA');
    expect(intern.getName()).toEqual(expect.stringContaining('Kevin'));
})
test('gets the Intern ID', () => {
    const intern = new Intern('Kevin', 25, 'kevin@mytest.com', 'UCLA');
    expect(intern.getiD()).toBe(25);
})
test('gets the Intern email', () => {
    const intern = new Intern('Kevin', 25, 'kevin@mytest.com', 'UCLA');
    expect(intern.getEmail()).toEqual(expect.stringContaining('Intern'));
})
test('gets the Intern School name', () => {
    const intern = new Intern('Kevin', 25, 'kevin@mytest.com', 'UCLA');
    expect(intern.getSchool()).toEqual(expect.stringContaining('UCLA'));
})