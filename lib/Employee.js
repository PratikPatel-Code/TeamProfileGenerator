// Creating a class constructer for employee.  

class Employee {
    // Base info for all employees
    constructer(name, id, email) {
        this.role = "Employee";
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;