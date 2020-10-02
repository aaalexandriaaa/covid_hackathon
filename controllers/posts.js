const Post = require('../models/post')

module.exports = {
  index,
  create,
  viewPosts,
  viewPostsByZip
}

function viewPosts(req, res) {
  console.log("THIS IS HARD")
  Post.findById(req.params.id)
    .then((post) => { res.json(post) })
    .catch(err => { res.json(err) })
}

function create(req, res) {
  req.body.user = req.user._id
  console.log(req.body.user)
  Post.create(req.body)
    .then(post => { res.json(post) })
    .catch(err => { res.json(err) })
}

function index(req, res) {
  Post.find({})
    .then(posts => { res.json(posts) })
    .catch(err => { res.json(err) })
}

function viewPostsByZip(req, res) {
  console.log("HELLO HELLO")
  // Post.find({ zipcode: req.user.zipcode })
  //   .then(post => { res.json(post) })
  //   .catch(err => { res.json(err) })
}