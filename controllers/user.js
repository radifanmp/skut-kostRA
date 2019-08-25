//import model
const models = require('../models')
const User = models.user


//CRUD func
exports.index = (req, res) => {
    User.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    User.findOne({
        where: { id: req.params.id }
    }).then(data => res.send(data))
}

exports.patch = (req, res) => {
    User.update(
        req.body, {
            where: {id: req.params.id}
        }
    ).then(data => {
        res.send({
            message: "Success"
        })
    })
}

exports.delete = (req, res) => {
    User.destroy({ where: {id: req.params.id}}).then(data => {
        res.send({
            message: "Success"
        })
    })
}
