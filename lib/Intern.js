//import Employee constructor template
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name,id,email);
        //reassigns role to Engineer
        super.role = "Intern";
        this.school = school;

    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;