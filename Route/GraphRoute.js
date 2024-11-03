import express from "express"
import {addAgricultureData,GetData} from "../Controller/GraphController.js"
import {addAgricultureDataValidation} from "../Util/validation.js"
const router = express.Router()

router.post("/add", addAgricultureDataValidation, addAgricultureData)

router.get("/get", GetData)
export default router;


