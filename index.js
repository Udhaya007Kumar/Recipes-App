import express from 'express'
import cors from 'cors';
import dotenv from  'dotenv';
import RecipeRouter from './Routes/RecipesRouter.js'

dotenv.config();

//initialize 
const app = express();

//cors middleware
app.use(cors());


//default middleware req.boday
app.use(express.json())

//Declare Dummy Route 
app.get('/',(req,res)=>{
    res.status(200).send("Welcome Api get method")
})



//custom routes in recepies
app.use('/api/recipes',RecipeRouter)

//port Declare
const port = process.env.PORT || 5000;


//listen the server 
app.listen(port,()=>{
        console.log("server is started");
        
})


