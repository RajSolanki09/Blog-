const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)

const Dbconnect = () => {
    try{
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
        
    }
    catch (err) {
        console.error('Database connection error:', err);
    };
}
module.exports = Dbconnect;