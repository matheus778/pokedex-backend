import express from 'express';
import routes from './routes';
import cors from 'cors';
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors())
  next();
});

app.use(routes);


app.listen(3333,()=>{
  console.log('servidor rodando em localhost:3333')
});
