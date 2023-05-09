const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sujalmishra374:IHzFwz41bhBuW5d0@cluster0.jffxnx6.mongodb.net/foodie?retryWrites=true&w=majority' 

const mongoDB = async ()=>{
    
        mongoose.connect(mongoURI)
        .then( async () => {
          console.log('Connected to MongoDB');
          const fetchedData = await mongoose.connection.db.collection("foodItem");
       
        // fetchedData.find({}).forEach(function(data) {
        //     // console.log(data);
        //     console.log();
        //   }).then(function() {
        //     mongoose.disconnect();
        //   });
        })
        .catch((error) => {
          console.error('Error connecting to MongoDB', error);
        });  
       
        
}

module.exports = mongoDB;