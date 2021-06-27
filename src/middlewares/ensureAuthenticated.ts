import { Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
  sub : string;
}

 export function ensureAuthenticated(request : Request, response : Response, next : NextFunction){
  

   const authtoken =  request.headers.authorization  
    
    if(!authtoken){
        return response.status(401).end()
    }

    const [, token] = authtoken.split(" ")

   try {

    const { sub } = verify(token, "037723e939f5834d51cc5fc774143166") as IPayload
    // console.log(sub)

    
    request.user_id = sub;

    return next()
    
   } catch (error) {
       return response.status(401).end()
   }




   

 }