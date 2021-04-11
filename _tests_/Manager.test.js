const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Becky', 33, 'becky@mytest.com', 8884564242);

    expect(manager.name).toBe('Becky');
    expect(manager.id).toBe('33');
    expect(manager.email).toBe('becky@mytest.com');
    expect(manager.officeNumber).toBe('8884564242');
} )

test('gets the manager name', () => {
    const manager = new Manager('Becky', 33, 'becky@mytest.com', 8884564242);
    expect(manager.getName()).toEqual(expect.stringContaining('Becky'));
})
test('gets the manager ID', () => {
    const manager = new Manager('Becky', 33, 'becky@mytest.com', 8884564242);
    expect(manager.getId()).toBe(33);
})
test('gets the manager email', () => {
    const manager = new Manager('Becky', 33, 'becky@mytest.com', 8884564242);
    expect(manager.getEmail()).toEqual(expect.stringContaining('becky@mytest.com'));
})
test('gets the manager role', () => {
    const manager = new Manager('Becky', 33, 'becky@mytest.com', 8884564242);
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});
test('gets the office Number', () => {
    const manager = new Manager('Becky', 33, 'becky@mytest.com', 8884564242);
    expect(manager.getOfficeNumber()).toBe(8884564242);
})