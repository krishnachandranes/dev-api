
const user = require('../models/users')

module.exports = function(app){
app.get('/users', user.getUsers)
app.get('/roles',user.getRoles)

}