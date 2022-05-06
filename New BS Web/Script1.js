// JavaScript source code
loadCart();
var confPay = document.getElementsByClassName('yay');
for (var i = 0; i < confPay.length; i++) {
    confPay[i].addEventListener('click', function () { storeCustomer(); });
}

//var chk = document.getElementsByClassName('checkB');
//for (var i = 0; i < chk.length; i++) {
  //  chk[i].addEventListener('click', function () { checkBlanks() });
//}

function loadCart() {
    var food = "";
    var cost = 0;
    var price = 0;
    var qty = 0;
    var total = 0;

    if (sessionStorage.getItem('cart')) {
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        for (let i = 0; i < cart.length; i++) {
            var x = JSON.parse(cart[i]);
            price = parseFloat(x.price.split('$')[1]);
            food = x.productname;
            qty = x.quantity;
            cost = (price * qty).toFixed(2);
            total += (price*qty);
            document.getElementById("food").innerHTML += qty + " " + food + "<br>";
            document.getElementById("cost").innerHTML += "$" + cost + "<br>";
        }
    }
    var tax = total * .0725;
    total += (total * .0725);
    document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
    document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2);
}

function storeCustomer() {
    
}
/*
function checkBlanks() {
    if (!document.getElementById('firstname').value.match(/\S/)) {
        alert("Please Fill All The Required Blanks");
    }
    else if (!document.getElementById('lastname').value.match(/\S/)) {
        alert("1");
    }
    else if (!document.getElementById('address').value.match(/\S/)) {
        alert("P2");
    }
    else if (!document.getElementById('phone').value.match(/\S/)) {
        alert("Please Enter A Valid Phone Number");
    }
    else if (!document.getElementById('zipcode').value.match(/\S/)) {
        alert("4");
    }
    else if (!document.getElementById('city').value.match(/\S/)) {
        alert("5");
    }
    else 
        window.location.replace("Billing.php");
}*/