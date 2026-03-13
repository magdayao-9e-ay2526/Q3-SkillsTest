//variable declaration
const ADMIN_FEE = 50.00;
const TICKET_PRICE = 250.00;
let total = subTotal + Admin_Fee
let qty = document.getElementById('qty').value
let subTotal = qty * (TICKET_PRICE);
//display answer
document.getElementById('subtotalPrice').value=subTotal;
document.getElementById('totalPrice').value=total;