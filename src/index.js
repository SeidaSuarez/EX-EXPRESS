import dotenv from 'dotenv';
import app from "./app.js";
import { DBconnect } from "./db.js";

dotenv.config();
DBconnect();


app.listen(3000);
console.log("Lanzando servidor en el puerto", 3000);
