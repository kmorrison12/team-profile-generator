const Engineer = require("../lib/engineer")

// render manager card
const renderManager = (manager) => {
    return `    
    <div class="card" style = "width: 18rem;" >
        <div class="card-body">
            <h5 class="card-title bg-secondary">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 bg-secondary text-muted">Intern</h6>
            <div class="card-text">
            <p>ID: ${manager.id}</p>
            <p>Email: ${manager.email}</p>
            <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>`
}

// render engineer card
const renderEngineer = (engineer) => {
    return `    
    <div class="card" style = "width: 18rem;" >
        <div class="card-body">
            <h5 class="card-title bg-secondary">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 bg-secondary text-muted">Intern</h6>
            <div class="card-text">
            <p>ID: ${engineer.id}</p>
            <p>Email: ${engineer.email}</p>
            <p>GitHub: ${engineer.github}</p>
            </div>
        </div>`
}

// render intern card
const renderIntern = (intern) => {
    return `    
    <div class="card" style = "width: 18rem;" >
        <div class="card-body">
            <h5 class="card-title bg-secondary">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 bg-secondary text-muted">Intern</h6>
            <div class="card-text">
            <p>ID: ${intern.id}</p>
            <p>Email: ${intern.email}</p>
            <p>School: ${intern.school}</p>
            </div>
        </div>`
}


renderHTML = (teamData) => {
let employee = []
for (let i = 0; i < teamData.length; i++) {
    const teamMember = teamData[i]
    const role = employee.getRole()

    if (role === "Manager") {
        const managerSection = renderManager(teamMember)
        employee.push(managerSection)
    }

    if (role === "Engineer") {
        const engineerSection = renderEngineer(teamMember)
        employee.push(engineerSection)
    }

    if (role === "Intern") {
        const internSection = renderIntern(teamMember)
        employee.push(internSection)
    }
} 

const team = employee.join("")
const generateTeam = generateTeamProfile(team)
return generateTeam

}


const generateTeamProfile = (team) => {
    return `
< !DOCTYPE html >
<html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // link bootsrap for card styling
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Team Profile</title>
    </head>
        <header class="text center p-3 mb-2 bg-primary text-white">Our Team<>
        <body>
        ${team}
        </body>

    </html>`

}

module.exports = renderHTML