//REQUIRE
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const createHTML = require("./src/createhtml");

//array of generated profiles
const employeeArray = [];

//init function runs program
function init() {
createManager()
.then(createEmployees)
.then(employeeArray => {
    return createHTML(employeeArray);
})
.then(HTML => {
    return createFile(HTML);
})
.catch(error => {
    console.log(error);
})

}

function createManager() {
    console.log("CREATING MANAGER PROFILE");
    return inquirer.prompt ([
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

    
        
        
};


function createEmployees() {
    console.log("ADD ADDITIONAL EMPLOYEES (up to 4)")

   return inquirer.prompt ([
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
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Please enter a name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: input => {
                if  (isNaN(input)) {
                    console.log ("Please enter a number")
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
            validate: input => {
                
                if (input) {
                    return true;
                } else {
                    console.log ('Please enter a email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineers's github profile",
            when: (input) => input.role === "Engineer",
            validate: input => {
                if (input ) {
                    return true;
                } else {
                    console.log ("Please enter the Engineers's github profile")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school/University",
            when: (input) => input.role === "Intern",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Please enter a school/university name!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAnotherEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAnotherEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        employeeArray.push(employee); 

        if (confirmAnotherEmployee) {
            return createEmployees(employeeArray); 
        } else {
            return employeeArray;
        }
    });



}
    

  
function createFile(input) {

    fs.writeFile('./dist/index.html', input, err => {
        // catch possible error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Team Profile has been generated (check dist folder)")
        }
    })

};





// init func runs on program start
init();