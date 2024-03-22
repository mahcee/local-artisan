

let selectItems = document.querySelectorAll(".select");
console.log(selectItems);
let artItems = document.querySelectorAll(".menu__content__cards");
console.log(artItems);
// const updateSubTotals={}
for (let i = 0; i < selectItems.length; i++) {
  // console.log(selectItems[i])
  let elements = selectItems[i];
  if (elements.textContent === `All`) {
    console.log(elements);
    elements.classList.add("active");
  }
}
for (let i = 0; i < artItems.length; i++) {
  console.log(artItems[i]);
  let elements = artItems[i];
  if (elements.classList.contains("all")) {
    elements.style.display = "flex`";
  } else {
    elements.style.display = "none";
  }
}
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
  
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].classList.remove("active");
    }
    selectItems[i].classList.add("active");
    
    let filterName = selectItems[i].textContent;

    if (filterName === "All") {
      for (let i = 0; i < artItems.length; i++) {
        if (artItems[i].classList.contains("all")) {
          artItems[i].style.display = "flex";
        } else {
          artItems[i].style.display = "none";
        }
      }
    } else if (filterName === "Art") {
      for (let i = 0; i < artItems.length; i++) {
        if (artItems[i].classList.contains("art")) {
          artItems[i].style.display = "flex";
        } else {
          artItems[i].style.display = "none";
        }
      }
    } else if (filterName === "Craft") {
      for (let i = 0; i < artItems.length; i++) {
        if (artItems[i].classList.contains("craft")) {
          artItems[i].style.display = "flex";
        } else {
          artItems[i].style.display = "none";
        }
      }
    } 
     else {
      filterName === "Craft";
      for (let i = 0; i < artItems.length; i++) {
        if (artItems[i].classList.contains("craft")) {
          artItems[i].style.display = "flex";
        } else {
          artItems[i].style.display = "none";
        }
      }
    }
  });
}



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
  cartItems.map((artItems) => {
    const cartProducts = document.createElement("div");
    cartProducts.classList.add("cart-product");
    cartProducts.innerHTML = `
        <img src="${artItems.image}" width="100px" />
        
        <h3>${artItems.name}</h3>
        <p class="item-price">${artItems.price}</p>
        <div class="quantity-buttons">
        
        <button class="decrement">-</button>
        <p class="quantity">1</p>
        <button class="increment">+</button>
        </div>
        <h3 class="price">${artItems.price}</h3>

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
    const artName =
      e.target.parentElement.parentElement.children[0].textContent;
      console.log(artName)
    const artPrice =
      e.target.parentElement.parentElement.children[1].textContent.replace(
        "ksh.",
        ""
        );
        console.log(cartbutton)
    const artImage =
      e.target.parentElement.parentElement.children[0].children[0].src;
    if (e.target.textContent.toLowerCase() === "add to cart") {
      let artItems = {
        name: artName,
        price: artPrice,
        image: artImage,
      };
      console.log(e);
      cartItems.push(artItems);
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
        (item) => item.name === artName
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
      const totals=parseInt(itemPrice*itemQuantity);
      const itemTotal=parseInt(itemName.nextElementSibling.nextElementSibling.nextElementSibling);
     itemTotal.textContent=totals
      console.log(itemTotal)
  }

  
}


function updateSubTotals(){
  const itemSubTotals=document.querySelectorAll(".price");
  let subTotals=0;
  for(let i=0;i<itemSubTotals.length;i++){
subTotals = subTotals +parseInt(itemSubTotals[i].textContent);
  }

document.querySelector(".sub-total").textContent=`Ksh. ${subTotals.toLocaleString()}`;
}

updateCartItems();