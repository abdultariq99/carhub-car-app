const express = require('express');
const cors = require('cors')
const app = express();
const corsOptions = {
    origin : ['http://localhost:5173']
}
app.use(cors())

app.get('/api', (req,res)=> {
    res.json({fruits: ['apple','oranges','banana']})
})

app.listen(8080, ()=>{
    console.log("Server started at port 8080")
})