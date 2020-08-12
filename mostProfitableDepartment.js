module.exports = function (salesData) {
    var mostProfit = 0;
    var highestDepartment

    for (var i = 0; i < salesData.length; i++) {
        var sale = salesData[i]

        if (sale.sales > mostProfit) {
            mostProfit = sale.sales
            highestDepartment = sale.department
            //console.log(highestDepartment)
        }
    } return highestDepartment
}