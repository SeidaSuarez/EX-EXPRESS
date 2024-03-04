import app from "./app.js";
import { DBconnect } from "./db.js";

DBconnect();

app.listen(3000);
console.log("Lanzando servidor en el puerto", 3000);
