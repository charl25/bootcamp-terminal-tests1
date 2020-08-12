let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(){

    it('should return 2 ', function(){
        assert.equal('2', countAllFromTown('CA,1234,CJ 1558,CJ 5863,CL 3448,CA 2455','CA'));
    });
    it('should return 1 ', function(){
        assert.equal('1', countAllFromTown('CA 1235, CL 3578','CL'));
    });
});