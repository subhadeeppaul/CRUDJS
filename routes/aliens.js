const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')


router.get('/', async(req,res) => {
    try{

        
           const aliens = await Alien.find()
           res.json({res:aliens})
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/findUser', async(req,res) => {
    try{
           const alien = await Alien.find({tech:"Python"})
           res.json({res:alien})
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/user', async(req,res) => {
    //console.log(req.body)
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub:req.body.sub=="true"?true:false
    })

    try{
        const a1 =  await alien.save() 
        res.json({res:a1})
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router