const express = require('express');
const app = express();
const userController = require('./controllers/userController');


app.use(express.json());

app.post('/editeusername', async function(req, res) {
    const result = await userController.runEditUserName(req);
    res.status(200).send(String(result));
});

app.post('/createUser', async function(req, res) {
    const result = await userController.runCreateUser(req);
    res.status(200).send(String(result));
});

app.listen(3000, () => {
    console.log('listening on port 3000');
    //models.User.findAll().then(() => console.log('models found'));
});