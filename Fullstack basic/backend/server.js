
import express from 'express';

const app = express();

// app.get('/', (req, res) =>{
//     res.send('Server is ready');
// });

// get a list of 3 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Programmer Joke',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
        },
        {
            id: 2,
            title: 'Math Joke',
            content: 'Why was the equal sign so humble? Because it realized it was neither greater nor less than anyone else.'
        },
        {
            id: 3,
            title: 'Computer Joke',
            content: 'Why was the computer cold? Because it forgot to close its Windows.'
        }
    ];

    res.json(jokes);
});



const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log('Serve at http://localhost:${port}');
});