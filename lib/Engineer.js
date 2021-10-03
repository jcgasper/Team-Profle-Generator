//import Employee constructor template
const Employee = require("./Employee");

//engineer class extends employee class constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        //reassigns role from Employee to engineer
        super.role = "Engineer";
        this.github = github;

    }
    //returns Engineers github
    getGithub() {
        return this.github;
    }

};

//exports Engineer module
module.exports = Engineer;