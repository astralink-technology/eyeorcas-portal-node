module.exports = function(req, res) {
    var base = req.params.base;
    var method = req.params.method
    var basePage = require('./' + base);

    if( basePage ) {
        if (method){
            basePage[method](req, res);
        }else{
            fail();
        }
    }else{
        fail();
    }

    function fail() {
        res.send(404);
    }

}