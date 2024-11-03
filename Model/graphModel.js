import  mongoose from "mongoose"
const schema=mongoose.Schema;

const graphSchema= new schema(
    {
        year:{
            type:"number",
            required:true
        },
            cropType:
            {
                type:String,
                required:true
            },
            quantity:{
                type:"number",
                required:true
            },
            yield:{
                type:"number",
                required:true
            }
        
    }
)  

const GraphModel=mongoose.model("Graph",graphSchema);
export default GraphModel;