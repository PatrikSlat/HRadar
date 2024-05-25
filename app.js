import {fetchFromRadar} from 'flightradar24-client'
import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

const flights = await fetchFromRadar(46.57, 13.41, 42.03, 19.51)
//console.log(flights)

app.listen(PORT, () =>{
    console.log(`Listening on http://localhost:${PORT}`)
});
