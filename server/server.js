const express = require('express');
const axios = require('axios')
const cors = require('cors')
const app = express();
const corsOptions = {
    origin : ['http://localhost:5173']
}
app.use(cors())


const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: {model: 'corolla'},
    headers: {
      'x-rapidapi-key': '7faa17cf01msh991c200184d5d33p1dfedejsnaf8292951617',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

  app.get('/cars', async (req,res)=>{
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  });
 
const url = new URL("https://cdn.imagin.studio/getimage");
url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  
app.listen(8080, ()=>{
    console.log("Server started at port 8080")
})