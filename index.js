
const fs = require('fs');
const Manager = require('./lib/Manager');
const teamMembers = [];
const inquirer = require('inquirer');

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



        })
};

createManager();

    // {
    //     type: 'list',
    //     name: 'number',
    //     message: '?',
    //     choices: ["Engineer", "Intern"]
    // },