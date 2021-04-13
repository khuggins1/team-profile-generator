// create engineer section
const generateEngineer = engineer => {
    if (!engineer) {
      return '';
    }
  
    return `
      <section class="my-3" id="engineer">
        <div class="flex-row justify-space-between">
        ${engineer
          .map(({ name, id, email, gitHub }) => {
            return `
            <div class="card col-4 mb-2 bg-light text-light p-3">
                <div class="card-header">
                    <h3 class="text-light">${name}</h3>
                    <h4 class="text-light"><i class="fas fa-user-cog"></i>  Engineer</h4>
                </div>
                <div class="card-body"> 
                    <h5 class="btn text-dark"> ID: ${id}</h5>
                    <address class="btn text-dark"> Email: <a href=mailto:${email}>${email}</a></address>
                    <div class="btn text-dark">GitHub: <a class="ml-2 my-1 px-2 py-1 text-dark"  href="https://github.com/${gitHub}"  target="_blank">${gitHub}</a></div>
                </div>
            </div>
          `;
          })
          .join('')}
        </div>
      </section>
    `;
};
// create intern section
const generateIntern = intern => {
    if (!intern) {
        return '';
    }
    return `
      <section class="my-3" id="intern">
        <div class="flex-row justify-space-between">
        ${intern
          .map(({ name, id, email, school }) => {
            return `
            <div class="card col-4 mb-2 bg-light text-light p-3">
                <div class="card-header">
                    <h3 class="text-light">${name}</h3>
                    <h4 class="text-light"><i class="fas fa-user-graduate"></i>  Intern</h4>
                </div>
                <div class="card-body"> 
                    <h5 class="btn text-dark"> ID: ${id}</h5>
                    <address class="btn text-dark"> Email: <a href=mailto:${email}>${email}</a></address>
                    <h5 class="btn text-dark"> School: ${school}</h5>
                </div>
            </div>
          `;
          })
          .join('')}
        </div>
      </section>
    `;
};
// create manager section
const generateManager = manager => {
    let { name, id, email, officeNumber } = manager.manager;
    return `
      <section class="my-3" id="manager">
        <div class="flex-row justify-space-around">
            <div class="card col-4 mb-2 bg-light text-light p-3">
                <div class="card-header">
                    <h3 class="text-light">${name}</h3>
                    <h4 class="text-light"><i class="fas fa-user-tie"></i>  Manager</h4>
                </div>
                <div class="card-body"> 
                    <h5 class="btn text-dark"> ID: ${id}</h5>
                    <address class="btn text-dark"> Email: <a href=mailto:${email}>${email}</a></address>
                    <h5 class="btn text-dark"> Office number: ${officeNumber}</h5>
                </div>
            </div>
        </div>
      </section>
    `;
};
module.exports = teamData => {
    console.log(teamData);
    // destructure projects and about data from teamData based on their property key names
    const { intern, engineer, ...manager } = teamData;
    console.log('INTERN',intern,'ENGINEER',engineer,'MANAGER', manager)
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <script src="https://kit.fontawesome.com/2310386d33.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
        <div class="container flex-row justify-space-around align-center text-center py-3">
            <h1 class="page-title text-center text-secondary py-2 px-3">MY TEAM</h1>
        </div>
        </header>
        <main class="container my-5">
            ${generateManager(manager)}
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
        </main>
    
    </body>
    </html>`
;
};
