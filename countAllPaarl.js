module.exports = function (regNums) {
    var newList = regNums.split(",");
    var paarl = 0;

    for (var i = 0; i < newList.length; i++) {
        var tList = newList[i].trim();
        if (tList.startsWith("CJ")) { paarl = paarl + 1; }
    }
    return paarl;
}