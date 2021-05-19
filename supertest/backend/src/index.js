import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import routesPersons from './routes/auth';

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/',routesPersons);

let now= new Date();
app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

const port = process.env.PORT || 3001;
app.listen(port,()=>console.log(`Listening on port ${port}`));