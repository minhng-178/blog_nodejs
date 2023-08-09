class NewsController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("NEWS Detail!!!");
  }
}

module.exports = new NewsController();
