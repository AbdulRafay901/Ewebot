let cart = JSON.parse(localStorage.getItem("cart")) || [];


const container = document.querySelector("#cart-products-container");


container.innerHTML = "";


cart.forEach(item => {
  container.innerHTML += `
    <div class="add-s1-column1" data-id="${item.id}">
         <div class="card1">
              <img src="${item.image[0]}">
              <div class="text">
                    <h1 class="Name">${item.name}</h1>
                    <p>${item.Category}</p>
              </div>
         </div>

         <div class="card2">
              <h1>$${item.Price}.00</h1>
              <div class="quantity">
                   <p>QTY:</p>
                   <div class="plus-minus">
                       <button class="minus">-</button>
                       <p class="qty">${item.quantity}</p>
                       <button class="plus">+</button>
                   </div>
              </div>
         </div>

         <div class="card3">
              <p class="sub-total">$${item.Price * item.quantity}.00</p>
              <button class="remove"><p>X</p></button>
        </div>
    </div>
  `;
});



const plus = document.querySelectorAll(".plus");
plus.forEach(all => {
  all.addEventListener("click", () => {
      const parent = all.closest(".add-s1-column1");
      const id = parent.getAttribute("data-id");
      const item = cart.find(p => p.id == id);
      item.quantity++;
      all.parentElement.querySelector(".qty").innerText = item.quantity;
      parent.querySelector(".sub-total").innerText = `$${item.Price * item.quantity}.00`;
      localStorage.setItem("cart", JSON.stringify(cart));
      total();
  });
  
});


const minus = document.querySelectorAll(".minus");
minus.forEach(all => {
  all.addEventListener("click", () => {
      const parent = all.closest(".add-s1-column1");
      const id = parent.getAttribute("data-id");
      const item = cart.find(p => p.id == id);

      if (item.quantity > 1) {
          item.quantity--;
          all.parentElement.querySelector(".qty").innerText = item.quantity;
          parent.querySelector(".sub-total").innerText = `$${item.Price * item.quantity}.00`;
          localStorage.setItem("cart", JSON.stringify(cart));
      }
      total();
  });
});


const remove = document.querySelectorAll(".remove");
remove.forEach(removes => {
  removes.addEventListener("click", () => {
      const parent = removes.closest(".add-s1-column1");
      const id = parent.getAttribute("data-id");
      cart = cart.filter(p => p.id != id);
      localStorage.setItem("cart", JSON.stringify(cart));   
      parent.remove();
  });
  total()
  
});

function total(){

  let total = 0;
  cart.forEach(sub => {
    total += sub.Price * sub.quantity;
  })
  document.getElementById("total").innerHTML = `$${total}.00`;  
}


const checkout_btn = document.querySelector(".checkout-btn");

checkout_btn.addEventListener("click", (() => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    // const total = document.querySelector("#total");
    // const qty = document.querySelectorAll(".qty");
    // const Name = document.querySelectorAll(".Name");
    // Name.forEach(Names => {
    //     let data = ""; 
    //     data += Names.textContent;
    //     document.write(data + "<br>");
    // })

    // qty.forEach(qtys => {
    //    let check = "";
    //    check += qtys.textContent;
    //    document.write(check + "<br>")
       
    // })
    //    document.write(total.textContent);

}))

