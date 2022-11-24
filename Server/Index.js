import express from "express";
import Connection from "./Database/dataBase.js";
import dotenv from "dotenv";
import DefaultData from "./defaultData.js";

const app = express();

const PORT = 7987;

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME,PASSWORD);

app.listen(PORT,()=> console.log(`Server Run Sucessfully  ${PORT}`));

DefaultData();