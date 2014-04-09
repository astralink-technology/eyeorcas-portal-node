
/*
 * GET home page.
 */

exports.illegal = function(req, res){
  res.render('index');
};

exports.error = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.notfound = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};