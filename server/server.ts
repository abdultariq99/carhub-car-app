import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin : ['http://localhost:5173']
}
app.use(cors())



app.get('/cars', async (req,res)=>{
  const model : string = req.query.model
  const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: {model: model},
      headers: {
        'x-rapidapi-key': '7faa17cf01msh991c200184d5d33p1dfedejsnaf8292951617',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };

  try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  });
 
  
app.listen(8080, ()=>{
    console.log("Server started at port 8080")
})