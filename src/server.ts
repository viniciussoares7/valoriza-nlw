import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import { router } from "./routes"; 


import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use((err:Error, request:Request, response:Response, next:NextFunction) => {
  if(err instanceof Error){
    return response.json(400).json({
      error: err.message
    })
  }
  return response.json(500).json({
      status:"error",
      message:"Internal Server Error"
  })
})

app.listen(3000, () => console.log("Server is running"));