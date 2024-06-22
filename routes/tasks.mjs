import express from "express"

import {update, gettasks, addtasks, delettasks} from "../controllers/tasks.mjs";

const router =express()
  
router.post("/get", gettasks);
router.post("/add", addtasks);
router.post("/delete", delettasks);
router.post("/update", update);
export default router;