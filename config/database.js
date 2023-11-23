const { Sequelize } = require('sequelize');

// Define your MySQL database connection parameters
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost', // Your database host
  username: 'root', // Your database username
  password: 'Ro0t@6789&', // Your database password
  database: 'tuition_system', // Your database name
  port: 3306, // Your database port (default is 3306)
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('MYSQL Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the MYSQL database:', err);
  });

module.exports = sequelize;