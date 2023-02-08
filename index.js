const inquirer = require(`inquirer`)
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern  = require('./lib/intern')
const renderHTML = require('./src/renderHTML')

const team = ([])

// prompt for manager input then taken  to menu for entering an engineer or intern
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter manager's name"
        },
        {
            type: 'number',
            name: 'managerId',
            message: "Enter manager's employee ID"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter manager's email"
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "Enter manager's office number?"
        }
    ]).then(managerAnswers => {
        const { managerName, managerId, managerEmail, officeNumber } = managerAnswers
        const manager = new Manager(managerName, managerId, managerEmail, officeNumber)
        team.push(manager)
        addEmployee()
    })
}


// questions for engineer prompt
const addEngineer = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'engineerName',
        message: "Engineer's name?"
    },
    {
        type: 'number',
        name: 'engineerId',
        message: "Engineer's employee ID?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Engineer's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "Engineer's GitHub username?"
    }
]).then(engineerAnswers => {
    const { engineerName, engineerId, engineerEmail, github } = engineerAnswers
    const engineer = new Engineer(engineerName, engineerId, engineerEmail, github)
    team.push(engineer)
    addEmployee()
})
}

// questions for intern prompt
const addIntern = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'internName',
        message: "Intern's name?"
    },
    {
        type: 'number',
        name: 'internId',
        message: "Intern's ID?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "Intern's school?"
    }
]).then(internAnswers => {
    const { internName, internId, internEmail, school } = internAnswers
    const intern = new Intern(internName, internId, internEmail, school)
    team.push(intern)
    addEmployee()
})
}

// question to add either engineer or intern to use after adding manager
const addEmployee = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'newEmployee',
            message: 'What kind of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'No additional employees to add']

        }
    ]).then(response => {
        // switch statement to ask engineer or intern questions based on response
        switch (response.newEmployee) {
            case 'Engineer':
                addEngineer()
                break;
            case 'Intern':
                addIntern()
            case "No additional employees to add":
                createHTML()
        }
    })
}

const createHTML = team => {
    fs.writeFileSync('./dist/index.html', JSON.stringify(team), err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Your team profile has been generated.')
    }
    })
}

addManager()



// generate html file with roster of team info
// link github username to github profile
// link email