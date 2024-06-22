import mongoose from "mongoose"

const todo=mongoose.Schema({
    id:{
        type:String,
        reuired:true
    }
    ,
    date:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})


const todos=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    todos:[]
})

const todoSchema= mongoose.model("todos",todos)

export default todoSchema