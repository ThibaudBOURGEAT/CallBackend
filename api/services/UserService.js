const User = require('../models/User');

exports.getUsers = () => {
  var funcName = "getUsers";
  return new Promise((resolve, reject) => {
    User.find()
    .then((users) => {
      resolve({success: true, users});
    })
    .catch((err) => {
      reject({success: false, message: "Erreur dans la fonction " + funcName + " : " + err});
    });
  });
}

exports.newUser = (body) => {
  var funcName = "newUser";
  return new Promise((resolve, reject) => {
    const newUser = new User({
      firstname: body.firstname,
      lastname: body.lastname,
      mail: body.mail,
      password: body.password
    })

    newUser.save()
    .then(() => {
      resolve({success: true, message: "Un nouvel utlisateur à été créer !"});
    })
    .catch((err) => {
      reject({success: false, message: "Erreur dans la fonction " + funcName + " : " + err});
    });
  });
}
