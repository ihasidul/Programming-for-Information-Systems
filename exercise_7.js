function takeBasketInput() {
    const rows = document.querySelectorAll('#productsDisplay tr');
    let basket = {};

    rows.forEach(row => {
        const tds = row.querySelectorAll('td');
        if (tds.length >= 4) {
            const name = tds[1].textContent.trim().toLowerCase();
            const quantityInput = tds[3].querySelector('input');
            const quantity = quantityInput.value;

            if (quantity) {
              basket[name] = parseInt(quantity);
            }
        }
    });
    return basket;
}
let f7 = (basket, prices) => {
  let totalCost = 0;
  for (let product in basket) {
    if (!prices.hasOwnProperty(product)) {
      alert("Product " + product + " not found in prices.");
      return;
    }
    totalCost += basket[product] * prices[product];
    // totalCost = totalCost + (basket[product] * prices[product]);
  }
  return totalCost;
};

async function getPricesFromFile() {
    const productPrices = {};
    try {
        const response = await fetch('./product_prices.json');
        const data = await response.json();
        const products = data.products;

        products.forEach(product => {
            productPrices[product.name] = product.price;
        });

        return productPrices;
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
        return {}; // Return empty object on error
    }
}

async function calculateBasketPrice() {
    const basket = takeBasketInput();
    console.log("BASKET");
    console.log(basket);

    const prices = await getPricesFromFile();
    console.log("PRICES");
    console.log(prices);

    const totalBasketPrice = f7(basket, prices);
    alert("The total price of the basket is " + totalBasketPrice);
}
