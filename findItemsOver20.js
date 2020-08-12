module.exports = function (objList) {
    var itemsOver = [];

    for (var i = 0; i < objList.length; i++) {
        var item = objList[i];
        var qty = item.qty;

        if (qty > 20) {
            itemsOver.push(item);
            //console.log(itemsOver);
        }

    } return itemsOver;
}