import mongoose from 'mongoose';

export const DBconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexion con BBDD satisfactoria.");
    } catch (error) {
        console.error("Error al conectar con la BBDD:", error);
    }
};