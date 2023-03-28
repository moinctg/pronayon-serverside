const asyncHandeler = require('express-async-handler')

// app.post("/addUserInfo", async (req, res) => {
  
     
     
//    });
 
//    app.put("/addUserInfo", async(req,res)=>{
 
    
 
   const postSignUP = asyncHandeler(async(req,res) =>{
    if(!req.body){
        res.status(400)
        throw new Error ('pls add a file');
    }
   
        const user = req.body;
        const result = await usersCollection.insertOne(user);
        console.log(result);
        res.json(result)
})
const putSignup = asyncHandeler(async(req,res) =>{
    const filter = { email: req.body.email };
        const result = await usersCollection.find(filter).toArray();
        if (result) {
          const documents = await usersCollection.updateOne(filter, {
            $set: { role: "admin" },
          });
          console.log(documents);
        }
        else {
          const role = "admin";
          const result3 = await usersCollection.insertOne(req.body.email, {
            role: role,
          });
        }
    
        console.log(result);
      });
    



// / / make admin

//   app.put("/makeAdmin", async (req, res) => {
//     const filter = { email: req.body.email };
//     const result = await usersCollection.find(filter).toArray();
//     if (result) {
//       const documents = await usersCollection.updateOne(filter, {
//         $set: { role: "admin" },
//       });
//       console.log(documents);
//     }
//     // else {
//     //   const role = "admin";
//     //   const result3 = await usersCollection.insertOne(req.body.email, {
//     //     role: role,
//     //   });
//     // }

//     // console.log(result);
//   });

//   // check admin or not
//   app.get("/checkAdmin/:email", async (req, res) => {
//     const result = await usersCollection
//       .find({ email: req.params.email })
//       .toArray();
//     // console.log(result);
//     res.send(result);
//   });

module.exports = {

    postSignUP,
    putSignup
}