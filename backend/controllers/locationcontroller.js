


export const registreLocation = async (req, res) => {
    try{
        res.send("hello location")
    }catch(e){
        res.status(500).json({msg: "internal server error"})
    }
}