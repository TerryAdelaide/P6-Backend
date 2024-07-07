const mongoose = require ("mongoose");


const connectDB = () => {
     mongoose.connect(process.env.MONGO_CONNECT)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
}

module.exports = connectDB