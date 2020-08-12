let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    it('should return 2 ', function(){
        assert.equal('2', countAllPaarl('CA,1234,CJ 1558,CJ 5863,CL 3448,CA 2455'));
    });
    it('should return 0 ', function(){
        assert.equal('0', countAllPaarl('CA 1235, CL 3578'));
    });
});