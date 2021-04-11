const inquirer = require('inquirer');

const emailValidator = require('email-validator');

const Manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');

const Intern = require('./lib/intern');

const engineerArray = [];

const interArray = [];

const manager = {};

const createEmployee = (role) => {
    return inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: `Please enter ${role}'s name (Required)`,
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the ${role}'s name!`);
                    return false;
                }
            }

        },
        {
            type: 'number',
            name: 'id',
            message: `Please enter a number as a  ${role}'s id (Required)`,
            validate: input => {
                if(!isNaN(input)) {
                    return true;
                } else {
                    return 'Please use "arrow up" to enter a vaild number';
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter ${role}'s email adddress (Required)`,
            validate: input => {
               const val = emailValidator.validate(input);
               if(val) {
                   return true;
               } else {
                   console.log
                   return 'Please provide a valid email';
               }
                  
                }
            }
        ])
        };

const createManager = (employee) => {
    let {name,id,email} = employee
    return inquirer
    .prompt(
        {
            type:'number'
            name: 'officeNumber'
            message: 'Please enter office Number',
            validate: input => {
                if (input) {
                    this.manager = new Manager(name,id,email,input)
                    return true;
                } else {
                    console.log
                    return 'Please use "arrow up" to provide a valid phone number';
                }
            }
        }
    )
}
createEmployee('Manager')
.then(createManager)
.then(data => {console.log('DATA', data, 'MANAGER', this.manager)})
.catch(err => {
    console.log(err);
});