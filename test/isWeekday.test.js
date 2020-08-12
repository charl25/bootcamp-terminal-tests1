let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function(){

    it('should return false ', function(){
        assert.equal(false, isWeekday('Sunday'));
    });
    it('should return true ', function(){
        assert.equal(true, isWeekday('Monday'));
    });
});