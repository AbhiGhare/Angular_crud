const express = require('express');
require("./config");
const Product = require('./product');
const List = require('./list')
const app = express();
const cors = require('cors');
const { async } = require('rxjs');


app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

app.post("/create", async (req, resp) => {
    // let data = new Product(req.body);
    // const result = await data.save();
    // resp.send(result);

    let data = new List(req.body);
    const result = await data.save();
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    // let data = await Product.find();
    // resp.send(data);

    let data = await List.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await List.deleteOne(req.params);
    resp.send(data);
})


app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await List.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.get('/:_id',async (req,res)=>{
    console.log(req.params);
    let data = await List.findById(req.params._id)
    res.send(data)
})

app.listen(5000)