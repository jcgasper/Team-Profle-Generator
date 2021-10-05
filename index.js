//REQUIRE
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const createHTML = require("./src/createhtml");

const employeeArray = [];

let count = 0;

function init() {
createManager();
}

function createManager() {
    console.log("CREATING MANAGER PROFILE");
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter Manager's name", 
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter your Manager's ID number.",
            validate: input => {
                if  (isNaN(input)) {
                    console.log ("Please enter a number!")
                    return false; 
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter your Manager's full email address",
            validate: input => {
                if  (input) {
                    
                    return true; 
                } else {
                    console.log ("Please enter your Manager's email address")
                    return false;
                }
            }
        },


        {
            type: 'input',
            name: 'officeNum',
            message: "Please enter your Manager's office number",
            validate: input => {
                if  (isNaN(input)) {
                    console.log ("Please enter a number!")
                    return false; 
                } else {
                   return true;
                }
            }
        },
    
    ])
    .then(data => {
        console.log(data);
        const manager = new Manager(data.name,data.id,data.email,data.officeNum);
        console.log(manager);
        
        employeeArray.push(manager);
    })

    
    
        createEmployees;
   
};


function createEmployees() {
    console.log("ADD ADDITIONAL EMPLOYEES (up to 4)")

    inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if ((confirmAddEmployee) && (count<3)) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    });






}
    

  






// init func runs on program start
init();