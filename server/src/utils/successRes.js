import { StatusCodes } from "http-status-codes"

export const successRes = (res,data,message) =>{
  const response = {
    status:true,
    data:data,
    message:message
  }
  res.status(StatusCodes.OK).json(response)
}
