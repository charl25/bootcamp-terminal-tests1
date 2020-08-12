let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function', function(){

    it('should return pears and bananas ', function(){
            var threshold = 15;
            var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];
      assert.deepEqual([{name:'pears',qty:37},{name:'bananas', qty:27}],findItemsOver(itemList,threshold));
    });
    it('should return pears only ', function(){
        var threshold = 30;
            var itemList = [
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
      ];
      assert.deepEqual([{name:'pears',qty:37}],findItemsOver(itemList,threshold));
    });
});