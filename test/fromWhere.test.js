let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function(){

    it('should return Cape Town ', function(){
        assert.equal('Cape Town', fromWhere('CA'));
    });
    it('should return Paarl ', function(){
        assert.equal('Paarl', fromWhere('CJ'));
    });
});