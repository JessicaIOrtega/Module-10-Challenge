const createTeam = (teamMembersInfo) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
    <title>My Team</title>
</head>

<body>
    <header class="container-fluid">
        <div class="row text-center">
            <h1>My Team</h1>
        </div>
    </header>
    <main class="container-fluid">
    <div class="row">
    ${teamMembersInfo}
    </div>
    </main>
    <script src='index.js'></script>
</body>
</html>`

}

// Render different employee information into page
const createMng = (createManager) => {
    return ` <div class=" col-4 card shadow m-auto mt-5" style="width: 18rem;">
    <div class="card-body" id="username">
        <h3 class="card-title" id="name">${createManager.name}</h3>
        <h3 class="card-title" id="position">Manager</h3>
    </div>
    <div class="card m-auto mt-4 mb-4" style="width: 14rem">
        <ul class="m-2 list-group list-group-flush">
            <li class="list-group-item" id="ID">ID: ${createManager.id}</li>
            <li class="list-group-item" id="email">Email: ${createManager.email}</li>
            <li class="list-group-item" id="officeNumber">Office Number:${createManager.officeNumber}</li>
        </ul>
    </div>
</div>`
}

const createEng = (createEngineer) => {
    return ` <div class="col-4 card shadow m-auto mt-5" style="width: 18rem;">
    <div class="card-body" id="username">
        <h3 class="card-title" id="name">${createEngineer.name}</h3>
        <h3 class="card-title" id="position">Engineer</h3>
    </div>
    <div class="card m-auto mt-4 mb-4" style="width: 14rem">
        <ul class="m-2 list-group list-group-flush">
            <li class="list-group-item" id="ID">ID: ${createEngineer.id}</li>
            <li class="list-group-item" id="email">Email: ${createEngineer.email}</li>
            <li class="list-group-item" id="github">Github: ${createEngineer.github}</li>
        </ul>
    </div>
</div>`
}

const createIntrn = (createIntern) => {
    return ` <div class="col-4 card shadow m-auto mt-5" style="width: 18rem;">
    <div class="card-body" id="username">
        <h3 class="card-title" id="name">${createIntern.name}</h3>
        <h3 class="card-title" id="position">Intern</h3>
    </div>
    <div class="card m-auto mt-4 mb-4" style="width: 14rem">
        <ul class="m-2 list-group list-group-flush">
            <li class="list-group-item" id="ID">ID: ${createIntern.id}</li>
            <li class="list-group-item" id="email">Email: ${createIntern.email}</li>
            <li class="list-group-item" id="school">School: ${createIntern.school}</li>
        </ul>
    </div>
</div>`
}

const doHTML = (teamMembers) => {
    let employees = [];
    for (i = 0; i < teamMembers.length; i++) {
        const members = teamMembers[i]
        const position = members.getRole();

        if (position === 'Manager') {
            const managerSection = createMng(members)
            employees.push(managerSection);
        }

        if (position === 'Engineer') {
            const engineerSection = createEng(members)
            employees.push(engineerSection);
        }

        if (position === 'Intern') {
            const internSection = createIntrn(members)
            employees.push(internSection);
        }
    }

    const companyTeam = employees
    const companyInfo = createTeam(companyTeam)
    return companyInfo
}

module.exports = doHTML;