const express = require('express');
const router = express.Router()
const User = require('./model/user')


// Post user
router.post('/user', async (req, res) => {
  const user = new User(req.body)

  try{
    await user.save()
    res.status(201).send(user)
  }catch(e){
    res.status(400).send(e)
  }
})


// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find({})
  try{
    res.status(200).send(users)
  }catch(e){
    res.status(500).send(e)
  }
})


// Get a particular user by ID
router.get('/users/:id', async (req, res) => {
  const id = req.params.id

  const user = await User.find({_id: id})
  try{
    res.status(200).send(user)
  }catch(e){
    res.status(500).send()
  }
})


router.patch('/user/:id', async (req, res) => {
  const id = req.params.id

  const user = await User.findOneAndUpdate({_id: id},{
    name: {
      first: req.body.name.first,
      last: req.body.name.last
    },
    email: req.body.email,
    country: req.body.country,
    state: req.body.state,
    phone: req.body.phone,
    password: req.body.password
  }, {
    new: true
  })

  try{

    res.status(200).send(user)
  }catch(e){
    res.status(400).send()
  }
})

router.delete('/user/:id', async (req, res) => {
  const id = req.params.id

  const user = await User.findOneAndRemove({_id: id})

  try{
    res.status(200).send(user)
  }catch(e){
    res.status(500).send()
  }
})
module.exports = router