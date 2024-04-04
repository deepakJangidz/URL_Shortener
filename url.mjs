import connectMongoDb from './connectMongoDb.mjs';
import express from 'express';
import routers from './routes/url.mjs'


import path from 'path'
import ejs from 'ejs'
const port = 8001;
connectMongoDb('mongodb://127.0.0.1:27017/url')
.then(()=> console.log("MongoDB started"))
.catch(err => console.log(`MongoDb encountered error ${err}`));

const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/URL' , routers );


app.listen(port , ()=>console.log("Server started"));
