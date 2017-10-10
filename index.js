var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {[item]: Math.floor(Math.random() * 100) + 1}
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var str = "In your cart, you have "
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    for(let i = 0;i < cart.length;i++){
      str = str + `${getCart()[i][0]} at ${getCart()[i][0]}`
      if(i !== cart.length-1){
        str += ", "
      }
      else{
        str += '.'
      }
    }
    console.log(str)
  }
}

// function total() {
//   var num = 0
//   for(let i = 0;i < cart.length;i++){
//     num += cart[i]
//   }
//   return num
// }

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart("lemons")
viewCart()
