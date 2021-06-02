// setup employee as main constructor

const Employee = require('./Employee');

// using the employee constructor to extend it to intern

class Intern extends Employee {
    constructor(name, id, email, school) {
            super(name, id, email);
            this.github = github;
        }
        // adding school to intern card
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;