
var showCart = document.getElementById('show-cart');
var shoppingCart = document.getElementById('shopping-cart');
var cartOnPage = document.getElementById('cart-on-page');
var quantity = document.getElementById('total-qty');
var cartOnPage = document.getElementById('cart-on-page');
var itemTotal = document.getElementById('item-total');
var shoppingCartTotalQty = document.getElementById('shopping-cart-total');



showCart.addEventListener('click', function(event) {
	event.preventDefault();

	if (showCart.innerHTML === "Show Cart") {
		shoppingCart.className = "show";
		showCart.innerHTML = "Hide Cart";
	}
	else if (showCart.innerHTML === "Hide Cart") {
		shoppingCart.className = "hide";
		showCart.innerHTML = "Show Cart";
	}
}, false);



//add items to cart
function add(id) {
	var product = document.getElementById(id);
    var productID = product.id;
    var productQty = parseInt(product.querySelector('.quantity').value);
    var productName = product.querySelector('.name').innerHTML;
    var productPrice = product.querySelector('.price').innerHTML;
    	productPrice = parseFloat(productPrice.substr(1, 5)).toFixed(2);
   	var	index = findIndex(id);

	item = {
        "id": productID,
        "name": productName,
        "price": productPrice,
        "quantity": productQty,
        "totalPrice": productPrice * productQty
    }

    //if item's id does not exist, push to cart, else change qty
    if (index === -1 && productQty !== 0) {	
	    cart.items.push(item);
    }
    else { //if item exists, remove it because it adds another one, then update quantity
    	document.getElementById("section"+cart.items[index].id).remove();
    	cart.items[index].quantity += productQty;
    	cart.items[index].totalPrice = cart.items[index].price * cart.items[index].quantity;
    }


    totals();
    showCartOne();
    populateShoppingCart(index, id);
}

//find index of item in cart items 
function findIndex(id) {
	var indexOf = -1;

	for (var i = 0; i < cart.items.length; i++) {
		if (id === cart.items[i].id) {
			indexOf = cart.items.indexOf(cart.items[i]);
		}
	}
	return indexOf;
}

//show shopping cart section if there is one or more items in the cart
function showCartOne() {
    if (cart.count > 0) {
		shoppingCart.className = "show";
		showCart.innerHTML = "Hide Cart";
	}
}

//populate shopping cart
function populateShoppingCart(index, id) {
		//index is undefined so need to add the variable here again while passing index and id as parameters
		var index = findIndex(id);

		itemTotal.innerHTML += '<section id="section'+cart.items[index].id+'" class="cart-row"><div class="shopping-cart-img"></div><div class="col-1">' + cart.items[index].name + "</div>" + " " + '<div class="col-2"><form><input class="box cart-qty-box" value="' + cart.items[index].quantity + '"></input></form><button class="change" itemid="'+cart.items[index].id+'" href="#">Change Quantity</button></div>' + '<div col3id="'+cart.items[index].id+'" class="col-3">$' + cart.items[index].totalPrice + "</div></section>";
			//Adding itemid attribute to button assigns a separate id to the change button and then pass it to changeQuantity function

	changeQty(index, id);
	applyPromo();
	totals();
}

//change quantity in shopping cart
function changeQty(index, id) {
	
	var changeQty = document.querySelectorAll('.change');
	var	index = findIndex(id);
	for (var a = 0; a < changeQty.length; a++) {
		changeQty[a].addEventListener('click', function(event) {
			event.preventDefault();
			changeQuantity(event, index, this.getAttribute("itemid"));//get id of current item's button in cart
		}, false); 
	}

	function changeQuantity(event, index, id) {
		
		var	index = findIndex(id);
		var qtyBoxParent = event.target.parentNode.parentNode;
		var qtyBox = parseInt(qtyBoxParent.querySelector('.cart-qty-box').value);
		
		var cartRowParent = qtyBoxParent.parentNode;
		var child = cartRowParent.querySelector('section');
		
		//targets col-3
		var itemQty = event.target.parentNode.nextSibling;

		if (qtyBox === 0) {
			qtyBoxParent.remove(child);
			//remove item from cart array
			cart.items.splice(index, 1);
		}
		else {
			cart.items[index].quantity = qtyBox;
			cart.items[index].totalPrice = cart.items[index].quantity * cart.items[index].price;
			//updates col-3's totalPrice
			itemQty.innerHTML = "$" + cart.items[index].totalPrice;
		}
		totals();
	}
}

//totals
function totals() {
	//set these to 0 to so they don't store the initial values from the click ie: 2+1 doesn't become 2+2+1
	cart.count = 0;
	cart.total = 0;

	for (var j = 0; j < cart.items.length; j++) {
		cart.count += cart.items[j].quantity;
		cart.total += cart.items[j].totalPrice;
	}
	
	quantity.innerHTML = cart.count;
	shoppingCartTotalQty.innerHTML = "$" + parseFloat(cart.total).toFixed(2);
	cartOnPage.innerHTML = cart.count;
}

function containItem(item) {
	for (var j = 0; j < cart.items.length; j++) {
		if (cart.items[j].name === item) {
			return true;
		}
	}

   return false
}

function calculateTank16Discount() {
	// check if cart contains tank top if so, apply promo (find total of discount, then update cart total)
	if (containItem("Tank") === true) {
		//declare new variable to store tank discount
		//by not recalculating totals() and cart totals, this prevents using promo more than once
		var tankTotalPlusDiscount = cart.total;

		for (var j = 0; j < cart.items.length; j++) {
			if (cart.items[j].name === "Tank") {
				tankTotalPlusDiscount =
			 	tankTotalPlusDiscount - (cart.items[j].totalPrice * cart.promo[0].percent);
			 }
		}
		//set the tank discount total in the cart to be tank discount total 
		cart.tank16Discount = tankTotalPlusDiscount;
		//update html total
		shoppingCartTotalQty.innerHTML = "$" + parseFloat(tankTotalPlusDiscount).toFixed(2);
	}
	// if doesn't contain tank top, do nothing
	return;
}

function calculateAccess16PDiscount() {
	if (containItem("Scarf") === true) {
		var scarvesTotalPlusDiscount = cart.total;

		for (var b = 0; b < cart.items.length; b++) {
			if (cart.items[b].name === "Scarf") {
				scarvesTotalPlusDiscount =
			 	scarvesTotalPlusDiscount - (cart.items[b].totalPrice * cart.promo[1].percent);
			 }
		}
		cart.access16Discount = scarvesTotalPlusDiscount;
		shoppingCartTotalQty.innerHTML = "$" + parseFloat(scarvesTotalPlusDiscount).toFixed(2);
	}
	return;
}

function calculateFivePercentDiscount() {
		var fivePercentTotalPlusDiscount = cart.total;

		for (var c = 0; c < cart.items.length; c++) {
			fivePercentTotalPlusDiscount =
		 	fivePercentTotalPlusDiscount - (cart.total * cart.promo[2].percent);

		} 
		cart.fivePercentDiscount = fivePercentTotalPlusDiscount;
		shoppingCartTotalQty.innerHTML = "$" + parseFloat(fivePercentTotalPlusDiscount).toFixed(2);
}


function applyPromo()
{
	var promoEntered = document.getElementById('promo').value;

	if (promoEntered === "TANKS16") 
	{	
		calculateTank16Discount();
		// check if total of TANK16's discount is bigger than old promo
		// if so, use TANK16's discount
		if (cart.oldPromo === "TANKS16" || cart.oldPromo === "") {
			calculateTank16Discount();
			cart.oldPromo = "TANKS16";
			return;
		}
		if (cart.oldPromo === "ACCESS16" && promoEntered === "TANKS16") {
			if (cart.tank16Discount < cart.access16Discount) {
				// apply promo
				//update html total to be tank16Discount
				calculateTank16Discount();
				cart.oldPromo = promoEntered;
			}
			else {
				calculateAccess16PDiscount();
				cart.oldPromo = "ACCESS16";
			}
			return;
		}
		
		if (cart.oldPromo === "5PERCENT" && promoEntered === "TANKS16") {
			// check if TANK16 discount is bigger than 5Percent
			if (cart.tank16Discount < cart.fivePercentDiscount) {
				//apply promo
				calculateTank16Discount();
				cart.oldPromo = promoEntered;
			}
			else {
				calculateFivePercentDiscount();
				cart.oldPromo = "5PERCENT";
			}
			return;
		}	
		return;
	}
	

	if (promoEntered === "ACCESS16") {
		calculateAccess16PDiscount();
		if (cart.oldPromo === "ACCESS16" || cart.oldPromo === "") {
			calculateAccess16PDiscount();
			cart.oldPromo = "ACCESS16"
			return;
		}
		if (cart.oldPromo === "TANKS16" && promoEntered === "ACCESS16") {
			if (cart.access16Discount < cart.tank16Discount) {
				calculateAccess16PDiscount();
				cart.oldPromo = promoEntered;
			}
			else {
				calculateTank16Discount();
				cart.oldPromo = "TANKS16";
			}
			return;
		}
		if (cart.oldPromo === "5PERCENT" && promoEntered === "ACCESS16") {
			if (cart.access16Discount < cart.fivePercentDiscount) {
				calculateAccess16PDiscount();
				cart.oldPromo = "ACCESS16";
			}
			else {
			calculateFivePercentDiscount();
			cart.oldPromo = "5PERCENT";
			}
			return;
		}	
		return;
	}

	if (promoEntered === "5PERCENT") {
		calculateFivePercentDiscount();
		
		if (cart.oldPromo === "5PERCENT" || cart.oldPromo === "") {
			calculateFivePercentDiscount();
			cart.oldPromo = "5PERCENT";
			return;
		}
		if (cart.oldPromo === "ACCESS16" && promoEntered === "5PERCENT") {
			if (cart.fivePercentDiscount < cart.access16Discount) {
				calculateFivePercentDiscount();
				cart.oldPromo = promoEntered;
			}
			else {
				calculateAccess16PDiscount();
				cart.oldPromo = "ACCESS16";
			}
			return;
		}
		if (cart.oldPromo === "TANKS16" && promoEntered === "5PERCENT") {
			if (cart.fivePercentDiscount < cart.tank16Discount) {
				calculateFivePercentDiscount();
				cart.oldPromo = "5PERCENT";
			}
			else {
				calculateTank16Discount();
				cart.oldPromo = "TANKS16";
			}
			return;
		}	
		return;
	}
	//sets html total to cart total when invalid promo codes are entered
	if (promoEntered !== "5PERCENT" || promoEntered !== "ACCESS16" || promoEntered !== "TANKS16") {
		shoppingCartTotalQty.innerHTML = "$" + parseFloat(cart.total).toFixed(2);
	}
}



cart = {
	"items": [
		
	],
	"count": 0,
	"total": 0,
	"promo": [
    	{
      		"name": "TANKS16",
      		"percent": .1,
    	},
    	{
      		"name": "ACCESS16",
      		"percent": .15,
    	},
    	{
      		"name": "5PERCENT",
      		"percent": .05,
    	}
  	],
  	"tank16Discount": 0,
  	"access16Discount": 0,
  	"fivePercentDiscount": 0,
  	"oldPromo": ""
};

