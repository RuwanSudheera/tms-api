const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

// Middlewares
app.use(express.json());

// Routes
const studentRoutes = require('./src/routes/students');
const teacherRoutes = require('./src/routes/teachers');
const classRoutes = require('./src/routes/classes');

app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/classes', classRoutes);

app.listen(port, () => {
  console.log(`Server: tuition-management-system-API running on port ${port}`);
});