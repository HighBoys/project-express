import { NextFunction, Request, Response } from "express";
import Joi from "joi";

let schema = Joi.object({
    r: Joi.number().required().min(1),
})

let validatebola = (
    request: Request,
     response: Response,
      next: NextFunction) => {
        let {error} = schema.validate(request.body)
        if(error){
            /** status 400 = bad requset */
            return response.status(400).json({
                message : error.details
            })
        }
        next()
      } 

      export{ validatebola }