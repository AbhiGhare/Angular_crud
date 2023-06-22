const express = require('express');
const router = express.Router();
const Listing = require("../model/listing")


const { async } = require("rxjs");
// const listing = require("../model/listing");
//add new listing
router.post("/abc",async(req,res)=>{
    // res.send("add new listings")
    const listing = new Listing({
        // i:req.body.i,
        name:req.body.name,
        surname:req.body.surname
    });
    // try {
    //     const saved = await listing.save()
    //     res.send(saved)
    // } catch (error) {
    //     res.status(400).send(error)
    // }
    let result = await listing.save();
    console.log(result);
    res.send(result);
    res.send('send data')
})

//get all listing
// routers.get("/",(req,res)=>{
//     res.send("all listing")
// })

//single update
// router.get("/:id",(req,res)=>{
//     res.send("update")
// })

//update listing
// routers.put("/:id",(req,res)=>{
//     res.send("updated listing")
// })
module.exports = router;