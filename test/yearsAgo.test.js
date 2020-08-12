let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){

    it('should return 5', function(){

        assert.equal("5",yearsAgo("2015"));
    });
    it('should return 20', function(){

        assert.equal("20",yearsAgo("2000"));
    });
});