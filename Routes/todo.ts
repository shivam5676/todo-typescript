import { Router } from "express";
import { todo } from "../models/todo";

const router=Router();
let todos:todo[]=[];
router.get("/",(req,res,next)=>{
    res.status(200).json({todos})
})
router.post("/post",(req,res,next)=>{
  const newTodo:todo={
    id:Math.random().toString(),
    text:req.body.text
  }
  todos.push(newTodo)
})
router.post("/delete",(req,res,next)=>{
    const id=req.body.id
    const checkId=todos.findIndex(current=>current.id===id)
    if(checkId===-1){
        return res.status(400).json({msg:"can not delete this item because item is not present"})
    }
   const afterDeletedArray= todos.filter(current=>current.id!=id)
   todos=afterDeletedArray;
   return res.status(200).json({msg:"item successfully deleted",todos})
})
router.post("/edit",(req,res,next)=>{
    const id=req.body.id;
    const newtext=req.body.text;
    const checkId=todos.findIndex(current=>current.id===id)
    if(checkId===-1){
        return res.status(400).json({msg:"can not editthis item because item is not present"})
    }
    const updateItem={id:id,text:newtext};
    const updateArray=[...todos]
    updateArray[checkId]=updateItem;
    todos=updateArray;
    return res.status(200).json({msg:"item successfully updated",todos})

})
export default router