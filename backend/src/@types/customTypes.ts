import { Request } from "express"

export interface ReqUserType extends Request {
  user: string
}