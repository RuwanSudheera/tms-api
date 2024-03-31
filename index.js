const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9000;
const loggerMiddleware = require('./src/middlewares/loggerMiddleware');

// Middlewares
app.use(express.json());
app.use(loggerMiddleware);

// Routes
const studentRoutes = require('./src/routes/students');
const teacherRoutes = require('./src/routes/teachers');
const classRoutes = require('./src/routes/classes');
const paymentRoutes = require('./src/routes/payments');

app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/classes', classRoutes);
app.use('/payments', paymentRoutes);

app.listen(port, () => {
  console.log(`Server: tuition-management-system-API running on port ${port}`);
});