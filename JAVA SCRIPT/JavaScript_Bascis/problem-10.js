var costprice=120;
var sellingprice=175;
var quantity=15;

var Totalpurchasecost=costprice*quantity;
var Sellingamount=sellingprice*quantity;
var Totalprice= Totalpurchasecost-Sellingamount;

console.log("Totalpurchasecost:" + Totalpurchasecost);
console.log("Totalsellingamount:" + Sellingamount);
console.log("Totalprofit:" + Totalprice);
