const express = require('express');
const app = express();

const routes = require('./Routes/routes');
const users = require('./Routes/users');
const auth = require('./Routes/auth');
const contacts = require('./Routes/contacts');

app.use(routes);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/contacts', contacts);

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
