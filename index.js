
import express from 'express'
import dotenv from 'dotenv'
import connect from './db/config.js'
import carsRouter from "./routes/cars.js"
import carRouter from "./routes/car.js"
import cors from 'cors'
dotenv.config()

const app= express()


const PORT= process.env.PORT || 8000

app.get('/',(req,res)=>{
res.send('Miles Motors Api : developed by Amschel & Glen :-) ')
})
app.use(express.json());
app.use('/cars',carsRouter);
app.use("/car",carRouter);
app.use(cors({
    origin: '*'
}));
const start= async  ()=>{

try{
await connect(process.env.MONGO_URL)


app.listen(PORT, ()=>{
console.log("server running on "+ PORT)


})
if (connect){
    console.log("connected to db");
}
}
catch(error){
    console.log(error)

}

}
start();
