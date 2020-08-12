module.exports = function (regNums, regLoc) {
    var newList = regNums.split(",");
    var locaton = 0;

    for (var i = 0; i < newList.length; i++) {
        var tList = newList[i].trim();
        if (tList.startsWith(regLoc)) { locaton = locaton + 1; }
    }
    return locaton;
}