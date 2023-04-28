const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = () => {
  mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log('Database connected successfully')).catch((error: string | number) => console.log(error));
}

module.exports = db;