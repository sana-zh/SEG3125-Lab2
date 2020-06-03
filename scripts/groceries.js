	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
	name: "brocoli",
	vegetarian: true,
	glutenFree: true,
	organic: true,
	price: 1.99
    },
    {
	name: "bread",
	vegetarian: true,
	glutenFree: false,
	organic: false,
	price: 2.35
    },
    {
	name: "salmon",
	vegetarian: false,
	glutenFree: true,
	organic: true,
	price: 10.00
    },
    {
	name: "milk (500 ml)",
	vegetarian: true,
	glutenFree: true,
	organic: false,
	price: 3.00
    },
    {
	name: "ribeye steak (12 oz)",
	vegetarian: false,
	glutenFree: true,
	organic: true,
	price: 7.50
    },
    {
	name: "three cheese frozen pizza",
	vegetarian: true,
	glutenFree: false,
	organic: false,
	price: 4.50
    },
    {
	name: "san marzano tomatoes (24 oz)",
	vegetarian: true,
	glutenFree: true,
	organic: true,
	price: 4.75
    },
    {
	name: "spaghetti noodles",
	vegetarian: true,
	glutenFree: false,
	organic: true,
	price: 2.00
    },
    {
	name: "eggs (a dozen)",
	vegetarian: true,
	glutenFree: false,
	organic: false,
	price: 2.50

    },
    {
	name: "chocolate cupcakes (a dozen)",
	vegetarian: true,
	glutenFree: false,
	organic: false,
	price: 4.10
    }
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
    let products = [];
    for (let i=0; i<prods.length; i+=1) {
	let included = true;
	
	if ((document.querySelector('.vegetarianCheckbox').checked) && (prods[i].vegetarian == false)){
	    included = false;
	}
	else if (((document.querySelector('.glutenFreeCheckbox').checked)) && (prods[i].glutenFree == false)){
	    included = false;
	}
	else if (((document.querySelector('.organicCheckbox').checked)) && (prods[i].organic == false)){
	    included = false;
	}

	if (included) {
	    products.push({name: prods[i].name, price: prods[i].price});
	}
    }
    return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
