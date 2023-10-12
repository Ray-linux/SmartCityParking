import vehicle from "../model/vehicle.js";


export const registervehicle = async(req, res) => {
    try{
        res.send("hi")
    }
    catch(e){
        res.status(500).json({msg: "internal servre error"});
    }
}