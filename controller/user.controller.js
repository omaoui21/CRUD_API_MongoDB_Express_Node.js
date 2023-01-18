const User = require('../model/User')

const getAllUser = (req,res) => {
    User.find().then(data => {
        res.json(data)
    }).catch(err => {console.log(err)})
}

const getSingleUser = (req,res) =>{
    const id = req.params.id;
    User.findById(id).then(data =>{
        res.json(data)
    }).catch(err => { console.log(err)})
}

const postNewUser = (req,res) => {
    const {name,age,gender} = req.body;
    const newUser = new User ({name,age,gender})
    newUser.save().then(data => {
        res.json(data)
    }).catch(err=>console.log(err))
}

const DeleteUser = (req,res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id).then(()=>{
        res.json("User Deleted") 
    }).catch(err=>console.log(err))
}
const UpdateUser = (req,res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id).then(data => {
       data.name = req.body.name;
       data.age = req.body.age;
       data.gender = req.body.gender;
       data.save().then(() => {
        res.json("User updated")
       }).catch(err=>console.log(err))
    })
}
module.exports = {
    getAllUser,
    getSingleUser,
    postNewUser,
    DeleteUser,
    UpdateUser
}