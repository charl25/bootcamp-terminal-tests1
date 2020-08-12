module.exports = function (record) {
    var newRecord = record.split(",");
    var total = 0;


    for (var i = 0; i < newRecord.length; i++) {
        var rec = newRecord[i].trim();
        if (rec.startsWith("c")) {
            total = total + 2.75;
        }
        else {
            total = total + 0.65;
        }
    }
    return "R" + total.toFixed(2);;
}