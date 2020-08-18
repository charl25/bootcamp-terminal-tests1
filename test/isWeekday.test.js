let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function(){

    it('should return false to a weekend ', function(){
        assert.equal(false, isWeekday('Sunday'));
    });
    it('should return true to a weekday', function(){
        assert.equal(true, isWeekday('Monday'));
    });
});