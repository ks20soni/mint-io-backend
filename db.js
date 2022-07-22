const mongoose = require('mongoose')
const url = 
"mongodb+srv://ks20soni:khushinewbie@atlascluster.s0vwqwe.mongodb.net/mint-io";

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected successfully")
    }).catch((error) => console.log("Error: ", error))
};

