// setup employee as main constructor

const Employee = require('./Employee');

// using the employee constructor to extend it to manager

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
            super(name, id, email);
            this.github = github;
        }
        // adding officennumber to engineer card
    getGithub() {
        return this.officenumber
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;