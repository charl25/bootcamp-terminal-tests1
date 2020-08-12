let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should return true correctly', function(){
        assert.equal(true, isFromBellville('CY 2356'));
    });
    it('should return true correctly', function(){
        assert.equal(true, isFromBellville('CY 568 516'));
    });
});