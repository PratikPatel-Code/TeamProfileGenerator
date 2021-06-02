// setup employee as main constructor

const Employee = require('./Employee');

// using the employee constructor to extend it to engineer

class Engineer extends Employee {
    constructor(name, id, email, github) {
            super(name, id, email);
            this.github = github;
        }
        // adding github to engineer card
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;