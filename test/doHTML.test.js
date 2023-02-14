const doHTML = require('./doHTML');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

describe('doHTML', () => {
    it('should return a string of HTML code when  an array of member objects is created', () => {
        const teamMembers = [
            new Manager('Jess', 1, 'jes.ortega7@gmail.com', 202),
            new Engineer('Hector', 2, 'ortegahol@gmail.com', 303)
        ];

        const result = doHTML(teamMembers);
        expect(typeof result).toBe('string');
        expect(result).toContain('Manager');
        expect(result).toContain('Engineer');
    });
});