module.exports = function(req, res) {
    var base = req.params.base;
    var api = req.params.api
    var basePage = require('./' + base);

    if( basePage ) {
        if (api){
            basePage[api](req, res);
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