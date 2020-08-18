let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(){

    it('should return true when the reg is from the same city', function(){
        assert.equal(true, regCheck('CY 2356','CY'));
    });
    it('should return false when the reg is not from the same city', function(){
        assert.equal(false, regCheck('CY 568 516','CA'));
    });
});