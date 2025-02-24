import express from 'express';
import sequelize from './db/config.js';


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexion a la base de datos establecida correctamente.');
    })
    .catch((error) => {
        console.error('Imposible conectar a la base de datos', error);
    });

    
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

