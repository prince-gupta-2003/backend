const asnycHandler = (requestHandler) => async (req,res,next)=> {
    try {
        await requestHandler(req,res,next)
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        });
    }
};


// const asnycHandler = (requestHandler) =>{
//     (req,res,next)=>{
//         Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
//     }
// }

export { asnycHandler };
