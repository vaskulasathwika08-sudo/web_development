var ticketPrice=180;
var ticketSold=8;
var discountPerticket=20;

var CollectionBeforeDiscount=ticketPrice*ticketSold;
var TotalDiscount=ticketPrice-discountPerticket;
var FinalCollection=CollectionBeforeDiscount-TotalDiscount;

console.log("CollectionBeforeDiscount:" +CollectionBeforeDiscount);
console.log("TotalDiscount:" +TotalDiscount);
console.log("FinalCollection:" + FinalCollection);
