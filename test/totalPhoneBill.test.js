let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(){

    it('should return R6.80 ', function(){
        assert.equal('R6.80', totalPhoneBill('call,sms,call,sms'));
    });
    it('should return R5.50 ', function(){
        assert.equal('R5.50', totalPhoneBill('call,call'));
    });
});