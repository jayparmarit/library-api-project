import express from "express";

import dotenv from "dotenv";
dotenv.config({ path: "./env" })

const app = express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.status(200).json("hellow from server start")
});

app.use((req, res, next)=>{
    next(new HttpError("requested routes not found",404))
});

app.use((error, req, res, next)=>{
    if(req.headerSent){
        return next(error)
    }
    res.status(error.statusCode || 500).json({ message: error.message || "internal server error"})
})