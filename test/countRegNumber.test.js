let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function(){

    it('should return 2 as the number of plates', function(){
        assert.equal('2', countRegNumber('CY 2356, CA 6874'));
    });
    it('should return 6 as the number of plates ', function(){
        assert.equal('6', countRegNumber('CY 568 516, CA 54684, CJ 2354,CAA 5646, CY 5684, CJ 125 469'));
    });
});