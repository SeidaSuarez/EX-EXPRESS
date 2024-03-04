import mongoose from 'mongoose';

export const DBconnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<db>?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexion con BBDD satisfactoria.");
    } catch (error) {
        console.error("Error al conectar con la BBDD:", error);
    }
};