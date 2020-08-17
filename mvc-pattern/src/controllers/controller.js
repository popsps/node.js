const Post = require('../model/Post')

exports.getWeather = (req, res) => {
  const post = new Post(req.body.form1)
  post.validateUserInput()
  if (post.errors.length) {
    // res.send('An error happend.')
    res.render("index", {error: "An error happend."})
  }
  else {
    res.render("index", {message: `${req.body.form1} has successfully submitted.`})
    // res.send(`${req.body.form1} has successfully submitted.`)
  }

}

exports.renderHomePage = (req, res) => {
  res.render("index", {title: "express routing from controller"})
}

exports.renderAboutPage = (req, res) => {
  res.render("about")
}