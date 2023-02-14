const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];
const inquirer = require('inquirer');
const makeHTML = require('./src/makeHTML');

function createManager() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is manager`s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employer ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Your email address:',
            },
            {
                type: 'input',
                name: 'number',
                message: 'What is your office number?',
            }

        ])
        .then((response) => {

            const manager = new Manager(response.name, response.id, response.email, response.number);

            teamMembers.push(manager);

            createEmployee();
        })
};

function createEngineer() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is Engineer`s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employer ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Your email address:',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is his/her Github username?',
            }

        ])
        .then((response) => {

            const engineer = new Engineer(response.name, response.id, response.email, response.github);

            teamMembers.push(engineer);

            createEmployee();
        })
};
function createIntern() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is Intern`s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employer ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Your email address:',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is his/her School?',
            }

        ])
        .then((response) => {

            const intern = new Intern(response.name, response.id, response.email, response.school);

            teamMembers.push(intern);

            createEmployee();
        })
};



function createEmployee() {

    inquirer
        .prompt([

            {
                type: 'list',
                name: 'newEmployee',
                message: 'Which employee you want to create?',
                choices: ["Engineer", "Intern", "No other employee"]
            }
            // {
            //     type: 'input',
            //     name: 'name',
            //     message: 'Employee name?',
            // },
            // {
            //     type: 'input',
            //     name: 'id',
            //     message: 'Employee ID?',
            // },
            // {
            //     type: 'input',
            //     name: 'email',
            //     message: 'Employee email address:',
            // },
            // {
            //     type: 'input',
            //     name: 'github',
            //     message: 'Employee Github:',
            // }

        ])
        .then(response => {
            switch (response.newEmployee) {
                case 'Engineer':
                    createEngineer()
                    break;
                case 'Intern':
                    createIntern()
                    break;
                case 'No other employee':
                    let teamInfo = makeHTML(teamMembers)
                    fs.writeFile('./src/index.html', teamInfo, (err) =>
                        err ? console.log(err) : console.log('Success created team'));
                    break;
            }
            // const employee = new Employee(response.name, response.id, response.email, response.github);

        })

};

createManager();



