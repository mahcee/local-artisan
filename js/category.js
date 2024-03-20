let cartIcon = document.querySelector(".cart-icon");
let cartItems = [];
let cartSection = document.querySelector(".cart-section");
let cartContainer = document.querySelector(".cart-container");
cartIcon.addEventListener("click", function () {
  cartContainer.classList.toggle("show_cart");
});
if (cartItems.length=== 0){
  cartSection.innerHTML=
  `<h3> No items added to cart</h3>`
}
function updateCartItems() {
  cartSection.innerHTML = "";
  cartItems.map((pizzaItems) => {
    const cartProducts = document.createElement("div");
    cartProducts.classList.add("cart-product");
    cartProducts.innerHTML = `
        <img src="${pizzaItems.image}" width="100px" />
        
        <h3>${pizzaItems.name}</h3>
        <p class="item-price">${pizzaItems.price}</p>
        <div class="quantity-buttons">
        
        <button class="decrement">-</button>
        <p class="quantity">1</p>
        <button class="increment">+</button>
        </div>
        <h3 class="price">${pizzaItems.price}</h3>

        `;
    cartSection.append(cartProducts);
    cartProducts.style.display=`flex`
  });

  const totalPrice=document.createElement("div");
  totalPrice.innerHTML=`
  <p>Subtotal</p>
  <p class="sub-total"></p>
  `

  cartSection.append(totalPrice);
  if (cartItems.length===0){
    cartSection.innerHTML =`
    <h3>no items added to cart</h3>`;
    document.querySelector(".cart-total").style.display="none";

  }else {
    document.querySelector(".cart-total").style.display="block"; 
  }
  updatePrices();
  updateSubTotals();
}
const cartCounter = document.getElementById("counter");
const cartbutton = document.querySelectorAll(".btn");
cartbutton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const pizzaName =
      e.target.parentElement.parentElement.children[1].children[0].textContent;
    const pizzaPrice =
      e.target.parentElement.parentElement.children[1].children[2].textContent.replace(
        "ksh.",
        ""
      );
    const pizzaImage =
      e.target.parentElement.parentElement.children[0].children[0].src;
    if (e.target.textContent.toLowerCase() === "add to cart") {
      let pizzaItems = {
        name: pizzaName,
        price: pizzaPrice,
        image: pizzaImage,
      };
      console.log(e);
      cartItems.push(pizzaItems);
      cartCounter.textContent = cartItems.length;
      updateCartItems();
      //   cartCounter.textContent = Number(cartCounter.textContent) + 1;
      e.target.style.background = "transparent";
      e.target.style.boxShadow = "0 0 5px gray";
      e.target.style.color = "red";
      e.target.textContent = "remove from cart";
    } else {
      // cartCounter.textContent = Number(cartCounter.textContent) - 1;
      e.target.textContent = "add to cart";
      e.target.style.background = "black";
      e.target.style.color = "white";
      const indexToRemove = cartItems.findIndex(
        (item) => item.name === pizzaName
      );
      cartItems.splice(indexToRemove, 1);
      cartCounter.textContent = cartItems.length;
      updateCartItems();
    }
  });
});
cartSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("increment")) {
    const currentQuantityElement = e.target.previousElementSibling;
    currentQuantityElement.textContent++;
    updateSubTotals();
  } else if (e.target.classList.contains("decrement")) {
    const currentQuantityElement = e.target.nextElementSibling;
    if (currentQuantityElement.textContent > 1) {
      currentQuantityElement.textContent--;
    }
  }
  updatePrices();
  updateSubTotals();
});
function updatePrices() {
  let cartTotals=0;
  const cartItemProducts = document.querySelectorAll(".cart-product");
  for (let i = 0; i < cartItemProducts.length; i++) {
    let productItem = cartItemProducts[i];

    
      const itemName=productItem.querySelector("h3");
      const itemPrice=parseInt(itemName.nextElementSibling.textContent);
      const itemQuantity=parseInt(itemName.nextElementSibling.nextElementSibling.children[1].textContent);
      const totals=itemPrice*itemQuantity;
      const itemTotal=itemName.nextElementSibling.nextElementSibling.nextElementSibling;
     itemTotal.textContent=totals
      console.log(itemTotal)
  }

  
}