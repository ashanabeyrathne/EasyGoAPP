const router = require("express").Router();
let Passenger = require("../models/Passenger");

// Add Passenger
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const mobile = Number(req.body.mobile);
    const amount = Number(req.body.amount);
    const address = req.body.address;

    const newPassenger = new Passenger({

        name,
        email,
        mobile,
        amount,
        address

    })

    newPassenger.save().then(()=>{
        res.json("Passenger Added")
    }).catch((err)=>{
        console.log(err);
    })

})


// Get Passenger
router.route("/").get((req,res)=>{

    Passenger.find().then((passengers)=>{
        res.json(passengers)
    }).catch((err)=>{
        console.log(err)
    })
})


// Update Passenger
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;

    const {name, email, mobile, amount, address} = req.body;

    const updatePassenger = {

        name,
        email,
        mobile,
        amount,
        address

    }

    const update = await Passenger.findByIdAndUpdate(userId, updatePassenger).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
      console.log(err);
      res.status(500).send({status:"Error IN update data" });
    })
})



// Delete Passenger
router.route("/delete/:id").delete(async (req, res) => {
     let userId = req.params.id;

     await Passenger.findByIdAndDelete(userId).then(() => {
         res.status(200).send({status: "User Deleted"});
      }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error Delete User", error: err.message});
      })
})




module.exports = router;