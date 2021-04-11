const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./intern')
class Team {
    constructor() {
        this.manager = {};
        this.engineer = [];
        this.intern = [];
    }
    addManager(name,id,email,officeNumber) {
        this.manager = new Manager (name,id,email,officeNumber)
    }
    addEngineer(engineer) {
        let {name,id,email,github} = engineer;
        this.engineer.push(new Engineer(name,id,email,github));
    }
    addIntern(intern){
        let {name,id,email,school} = intern;
        thisintern.push(new Intern(name,id,email,school));
    }
    getManager() {
        return this.manager;
    }
    getEngineer() {
        return this.engineer;
    }
    getIntern(){
        return this.intern;
    }
}
module.exports = Team;