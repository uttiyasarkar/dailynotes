const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/save-notes', (req, res) => {
    const date = req.body.date;
    const tasks = req.body.tasks;

    // Save the data to the database (you can replace this with your database logic)

    console.log('Received data:', { date, tasks });

    res.json({ message: 'Notes saved successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

