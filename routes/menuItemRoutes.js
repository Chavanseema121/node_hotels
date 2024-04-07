const express = require('express');
const router = express.Router();

const MenuItem = require("./../models/MenuItem");

// post method to add a menu items

router.post("/", async (req,res)=>{
    try{
        const data = req.body
        const newMenu = new MenuItem(data)
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({ error: "internal server error" });


    }

})
// get method to get the menu items

router.get("/",async (req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data)

    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }

});

// get method to get taste in the menu items 

router.get("/:taste",async(req,res)=>{
    try{
        const tasteType = req.params.tasteType;
        if(tasteType =='sweet'|| tasteType =='sour'|| tasteType =='spicy'){
            const response = await MenuItem.find({taste:tasteType});
            console.log('response fetched');
            res.status(200).json(response)
        }else{
            res.status(404).json({error:'taste is not valid'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});

    }
})
// updated the menu data using put method
router.put('/:id', async(req,res)=>{
    try{
        const menuId = req.params.id
        const updatedMenuData = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuId,updatedMenuData,{
            new:true,
            runValidators:true
        })
        if(!response){
            response.status(404).json({error:"menu not found"})
        }
        console.log(response)
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});

    }
});

//detelet menu item from menulist

router.delete('/id',async(req,res)=>{
    try {

         const menuId = req.params.id

         const response = await MenuItem.findByIdAndRemove(menuId)
         if(!response){
            res.status(404).json({error:'menu is not found'})

         }
         console.log(response)
         res.status(200).json(response)
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"internal server error"});

        
    }
})

module.exports = router