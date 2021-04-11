const Employee = require('../lib/Employee');

const { exportAllDeclaration } = require('@babel/types');

test('creates a Employee object' , () => {

    const employee = new Employee('Mark', 7,'markhamilton@mytest.com' );

    expect(employee.name).toBe('Mark');
    expect(employee.id).toBe(7);
    expect(employee.email).toBe('markhamilton@mytest.com');
})

test('gets the employee name', () => {
    const employee = new Employee('Mark', 7, 'markhamilton@mytest.com' )
    expect(employee.getName()).toEqual(expect.stringContaining('Mark'));
})

test('gets the employee ID', () => {
    const employee = new Employee('Mark', 7, 'markhamilton@mytest.com')
    expect(employee.getId()).toBe(7);
})
test('gets the employee email', () => {
    const employee = new Employee('Mark', 7, 'markhamilton@mytest.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining('markhamilton@mytest.com'));
})

test('gets the employee role', () => {
    const employee = new Employee('Mark', 7, 'markhamilton@mytest.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})