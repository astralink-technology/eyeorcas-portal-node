/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
    name: 'Bob'
  });
};

exports.name2 = function (req, res) {
    res.json({
        name: 'test'
    });
};