const express = require('express');
const app = express();

const PORT = 3000;

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '1234',
      database: 'delta_app',
    },
});

//Create
app.post('/users', async (req, res) => {
    const [id] = await knex('users').insert(req.body);
    res.status(201).send({ id });
});

//Read
app.get('/users', async (req, res) => {
    const users = await knex('users').select('*');
    res.send(users);
});

//Update
app.put('/users/:id', async (req, res) => {
    await knex('users').where('id', req.params.id).update(req.body);
    res.send({ message: 'User updated' });
});

//Delete
app.delete('/users/:id', async (req, res) => {
    await knex('users').where('id', req.params.id).del();
    res.send({ message: 'User deleted' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})