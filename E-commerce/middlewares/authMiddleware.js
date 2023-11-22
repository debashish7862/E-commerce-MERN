import JWT from 'jsonwebtoken'

//Protected Routes Token base

export const requireSignIn= async(req,res,next)=>{
    
try{
    const decode = JWT.verify(
        req.headers.autherization,
        process.env.JWT_SECRET
        );

        next();

}catch(error){
    console.log(error)
}

}