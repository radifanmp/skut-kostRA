const Cryptr = require('cryptr')
const jwt = require('jsonwebtoken')
const models = require('../models')
const startEncrypt = new Cryptr('kepobanget')

const User = models.user

exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  const username = req.body.username
  const password = req.body.password //use encryption in real world case!

  //check field empty
  if (!username || !password ){
    return res.status(400).json({
      error: true,
      message:  "Please Inser Field Username & Password" 
    })
  }
  User.findOne({ where: { username, password } }).then(user => {

    //Check Username Found or Not Found
    if (!user) {
      return res.status(400).json({
        error: true,
        message: "Username not found"
      })
    } 
    
    //Encrypt and Check Password
    const passwordEncrypt = startEncrypt.decrypt(user.password)
    if (passwordEncrypt === req.body.password){
      const token = jwt.sign({ userId: user }, 'kepobanget')
      res.send({
        token
      })
    }
    
    else {
      res.status(400).json({
        error: true,
        message: "Password Wrong"
      })
    }
  }).catch(err => {
    res.send({
      error: true,
      message: `Error : ${err}`
    })
  })

}

//Register

exports.register = async (req, res) => {

  //validasi field
  const { name, username, password, email, telp } = req.body
  if (!name || !username || !password || !email || !telp ) {
      return res.status(400).json({
          error: true,
          message: "Please Inser Field Correctly"
      })
  }

  //validasi User Terdaftar
  User.findOne({ where: { username } }).then(user => {
      if (!user) {
          req.body.password = startEncrypt.encrypt(req.body.password)
          const token = jwt.sign({
            userId : req.body
          }, 'kepobanget')

          User.create(req.body).then(data => {
            res.send({
              data,
              token
            })
          })
      }

      else {
        res.send({
          error : true,
          message: "Username already exists"
        })
      }
  }
  ). catch(err => {
    res.send({
      error: true,
      message: `Error : ${err}`
    })
  })
}