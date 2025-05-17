function showEx7Table() {
    data = fetch('./product_prices.json')
    .then(response => response.json())
    .then(data => {
        products = data.products
        const productsDisplay = document.getElementById('productsDisplay');
        products.forEach(product => {
            const div = document.createElement('tr');
            div.innerHTML = `
            <tr>
            <td >${product.id}</td>
            <td>${product.name}</td>
            <td id=ex7-product-price${product.id}>${product.price}</td>
            <td class=product_quantity><input type="number" id = ${product.id} placeholder="Enter Your Product Amount"></td>
            </tr>`;
        productsDisplay.appendChild(div);
        });
        
    })
}

showEx7Table();

let handleButtonClick = (exerciseNumber) => {
  switch (exerciseNumber) {
    case 1:
      takeInput();
      break;
    case 2:
      getMultiples();
      break;
    case 3:
      ex3();
      let a = document.getElementById("a").value;
      let b = document.getElementById("b").value;
      let n = document.getElementById("n").value;
      let sum = ex3(a, b, n);
      alert(
        "The sum of all the multiples of " +
          a +
          " or " +
          b +
          " below " +
          n +
          " is: " +
          sum
      );
      break;
    case 4:
      let ex4a = document.getElementById("ex4a").value;
      let ex4b = document.getElementById("ex4b").value;
      let ex4l = document.getElementById("ex4l").value.split(",").map(Number);
      let sum4 = f4(ex4a, ex4b, ex4l);
      alert("The sum of all the multiples of a or b in array l is: " + sum4);
      break;
    case 5:
      let ex5a = document.getElementById("ex5a").value.split(",").map(Number);
      let ex5l = document.getElementById("ex5l").value.split(",").map(Number);
      if (ex5a.length != 2) {
        console.log("I am here");
        console.log("ex5a:", ex5a);
        alert("Please enter exactly two integers for a.");
      } else {
        sum5 = f5(ex5a, ex5l);
        alert(
          "The sum of all the multiples of factors in a found in in l is: " +
            sum5
        );
      }
      break;
    case 6:
      let aValues = document
        .getElementById("ex6a")
        .value.split(",")
        .map(Number);
      let lValues = document
        .getElementById("ex6l")
        .value.split(",")
        .map(Number);
      let sumOfMultiples = f6(aValues, lValues);
      alert(
        "The sum of all the multiples of factors in a found in l is: " +
          sumOfMultiples
      );
      break;
    case 7:
      let basket = {
        egg: 3,
        chicken: 2,
      };
      let prices = {
        egg: 10,
        chicken: 10,
        apple: 30,
      };
      hasIssue = false;
      // check if all the keys on basket exists on the prices object
      for (let product in basket) {
        if (!prices.hasOwnProperty(product)) {
          alert("Product " + product + " not found in prices.");
          hasIssue = true;
          break;
        }
      }
      if (hasIssue) {
        break;
      } else {
        totalBasketPrice = f7(basket, prices);
        alert("The total price of the basket is " + totalBasketPrice);
      }
      break;
    default:
      alert("Invalid exercise number");
  }
};
// Functions for exercise 1
let takeInput = () => {
  let i = document.getElementById("user-input").value;
  if (i > 15) {
    alert("Baggage exceeds the allowance of 15kg");
  }
};
// Functions for exercise 2
let getMultiples = () => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  alert("The sum of all the multiples of 3 or 5 below 1000 is: " + sum);
};
function getMultiplesOfANumberFromArray(num, checkArray) {
  multiples = [];
  for (let i = 0; i < checkArray.length; i++) {
    if (checkArray[i] % num == 0) {
      multiples.push(checkArray[i]);
    }
  }
  console.log("Here are the multiples of " + num + " in the array");
  console.log(multiples);
  return multiples;
}
function getAnyMultiplesOfTwoNumberTillLimit(num1, num2, limit) {
  multiples = [];
  for (let i = 0; i < limit; i++) {
    if (i % num1 == 0 || i % num2 == 0) {
      multiples.push(i);
    }
  }
  console.log(
    "Here are the multiples of " + num1 + " and " + num2 + " below " + limit
  );
  console.log(multiples);
  return multiples;
}
function getAnyMultiplesOfTwoNumberFromAnArray(num1, num2, checkArray) {
  multiples = [];
  for (let i = 0; i < checkArray.length; i++) {
    if (checkArray[i] % num1 == 0 || checkArray[i] % num2 == 0) {
      multiples.push(checkArray[i]);
    }
  }
  console.log(
    "Here are the multiples of " + num1 + " and " + num2 + " in the array"
  );
  console.log(multiples);
  return multiples;
}
// Functions for exercise 3
let ex3 = (a, b, n) => {
  multiples = getAnyMultiplesOfTwoNumberTillLimit(a, b, n);
  sum = multiples.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

// Functions for exercise 4
let f4 = (a, b, l) => {
  let sum = 0;
  multiples = getAnyMultiplesOfTwoNumberFromAnArray(a, b, l);
  sum = multiples.reduce((acc, curr) => acc + curr, 0);
  return sum;
};
// Functions for exercise 5
let f5 = (a, l) => {
  console.log("l:", l);
  let sum = 0;
  multiples = getAnyMultiplesOfTwoNumberFromAnArray(a[0], a[1], l);
  sum = multiples.reduce((acc, curr) => acc + curr, 0);
  return sum;
};
// Functions for exercise 6
let f6 = (a, l) => {
  let sum = 0;
  allMultiples = [];
  for (let i = 0; i < a.length; i++) {
    let multiples = getMultiplesOfANumberFromArray(a[i], l);
    allMultiples = allMultiples.concat(multiples);
  }
  allMultiples = [...new Set(allMultiples)]; //Taking only unique values
  sum = allMultiples.reduce((acc, curr) => acc + curr, 0);
  return sum;
};