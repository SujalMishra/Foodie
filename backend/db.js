const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sujalmishra374:IHzFwz41bhBuW5d0@cluster0.jffxnx6.mongodb.net/foodie?retryWrites=true&w=majority' 
// const mongoURI = 'mongodb://sujalmishra374:IHzFwz41bhBuW5d0@ac-f65o6pz-shard-00-00.jffxnx6.mongodb.net:27017,ac-f65o6pz-shard-00-01.jffxnx6.mongodb.net:27017,ac-f65o6pz-shard-00-02.jffxnx6.mongodb.net:27017/foodie?ssl=true&replicaSet=atlas-8pk5l7-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async ()=>{
     
       // await mongoose.connect(mongoURI , {useNewUrlParser: true}, async(err,result)=>{
        //   if(err) console.log("----",err);
        //   else{
        //     console.log("connected");
        //     const fetched_data = await mongoose.connection.db.collection("foodItem");
        //     fetched_data.find({}).toArray(async function(err, data){
        //       const foodCategory = await mongoose.connection.db.collection("food_Items");
        //       foodCategory.find({}).toArray(function (err,catData){
        //         if(err) console.log(err);
        //         else{
        //           global.food_items = data;
        //           global.foodCategory = catData
        //         }
        //       })
        //     })
        //   }
        // })

   mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(async () => {
      console.log('Connected to MongoDB');
      const fetched_data = await mongoose.connection.db.collection("foodItem");
      const data = await fetched_data.find({}).toArray();
      // console.log(data);
      const foodCategory = await mongoose.connection.db.collection("food_Items");
      const catData = await foodCategory.find({}).toArray();
      global.food_items = data;
      global.foodCategory = catData;
      // mongoose.disconnect();
    })
      .catch((error) => {
        console.error('Error connecting to MongoDB', error);
      });


       
       
        
}

module.exports = mongoDB;