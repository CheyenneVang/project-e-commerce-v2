const express = require('express'); // express server
const bodyParser = require('body-parser');
const cors = require('cors'); // connection with front-end requests made to back-end
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ecommerceDataBase'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    connection.query(
        'SELECT * FROM `products`',
        function(err, results) {
            return res.send(results);
        }
    );
});

app.listen(3001, () => {
    console.log("Running on port 3001");
});