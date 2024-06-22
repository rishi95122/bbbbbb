import todoSchema from "../todo.mjs"


export const addtasks=async(req,res)=>{
const add=await todoSchema.updateOne({username:req.body.username},{
    $push:{
        todos:{
            id:req.body.id,
            name:req.body.name,
            description:req.body.description,
            date:req.body.date
        }
    }
},{upsert:true})
if(add) {console.log("added")

    return res.status(201).send("success")
}
 
}

export const delettasks=async (req,res)=>{

const rest=await todoSchema.updateOne({username:req.body.username},{
    $pull:{
        todos:{
            id:req.body.id
        }
    }
})

if(rest) return res.status(201).send("deleted")
}


export const update=async(req,res)=>{
console.log(req.body)
const updated=await todoSchema.updateOne({$and:[{username:req.body.username},{"todos.id":req.body.id}]},{
    $set:{
      "todos.$.name":req.body.name,
      "todos.$.description":req.body.description,
      "todos.$.date":req.body.date 
    }
})
if(updated) res.status(201).send("updated")
}
export const gettasks=async (req,res)=>{

    const get = await todoSchema.find({ username: req.body.username });
    if (get[0]) return res.status(200).json(get[0].todos);
    else {
      res.json([]);
    }
}