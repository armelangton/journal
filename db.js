//option 1 copy and paste from: https://sequelize.org/master/manual/getting-started.html
const Sequelize = require("sequelize");
const sequelize = new Sequelize("journal-walkthrough", "postgres", "password", {
   host: "localhost", 
   dialect: "postgres", 
});

//testing the connection using .authenticate method
sequelize.authenticate().then(
  function() {
    console.log('Connected to journal-walkthrough postgres database')
  },
  function(err) {
    console.log(err);
  }
);
//required by all to export
 
module.exports = sequelize;

// Example for postgres

// Option 2: Passing parameters separately (sqlite)
//const sequelize = new Sequelize({
  //dialect: 'sqlite',
 // storage: 'path/to/database.sqlite'
//});
