import { Request } from "express"

export interface ReqUserType extends Request {
  user: string
}

export interface tokenUser {
  user: string
}