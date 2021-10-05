// create profile cards based on employees role
function createManager(manager) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title">Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">${manager.officeNumber}</li>
        </ul>
    </div>
</div>
    `;
}

function createEngineer(engineer) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title">Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
        </ul>
    </div>
</div>
    `
}


function createIntern(intern) {
    return `
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title">Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>

`
};


createHTML = (data) => {

    
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


       
        if (role === 'Manager') {
            const managerCard = createManager(employee);

            cardArray.push(managerCard);
        }

     
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            cardArray.push(engineerCard);
        }

        
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            cardArray.push(internCard);
        }
        
    }

   
    const employeeCards = cardArray.join('')

   
    const generatedPage = generateTeamPage(employeeCards); 
    return generatedPage;

}


const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
</head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3 bg-info text-white">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    
    <div class="container-fluid">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
        ${employeeCards}

        
    </div>

        </div>
      </div>
    </div>
  </body>
</html>
`;
}


module.exports = createHTML;