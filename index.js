var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let obj={
    itemName:item,
    itemPrice:Math.ceil(Math.random()*100)

  }
  cart.push(obj);
  return `${obj.itemName} has been added to your cart.`

}

function viewCart() {
  if (cart.length===0){
    return `Your shopping cart is empty.`
  }
  if (cart.length===1){
    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`
  }
  let str=`In your cart, you have `;
  for (let i=0;i<cart.length-1;i++){
    str+=`${cart[i].itemName} at \$${cart[i].itemPrice}, `
  }
  str+=`and ${cart[cart.length-1].itemName} at \$${cart[cart.length-1].itemPrice}.`
  return str
}

function total() {
  let s=0;
  for (let item of cart){
    s+=item.itemPrice;
  }
  return s;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
