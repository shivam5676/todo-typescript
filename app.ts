import bodyParser from "body-parser";
import Express from "express"
import todoroutes from "./Routes/todo";

const app=Express();
app.use(bodyParser.json())
app.use(todoroutes)
app.listen(3000,()=>{
    console.log("running")
});