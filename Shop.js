const container = document.getElementById("productContainer");
let cartCount = 0;
let products = [];

fetch('./products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts(products);
  })
  .catch(err => console.error(err));

function displayProducts(list) {
  container.innerHTML = '';

  list.forEach(item => {
    container.innerHTML += `
      <div class="col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="S-s1-column2">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="S-s1-slider1" style="background-image:url('${item.image[0]}')">
                  <div class="icon">
                    <p>Add to Cart</p>
                    
                    <button class="Products-quantity" data-id="${item.id}"><i class="ri-shopping-cart-line" id="shop"></i>
                    </button>
                    
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="S-s1-slider2" style="background-image:url('${item.image[1]}')">
                  <div class="icon">
                    <p>Add to Cart</p>
                    <button class="Products-quantity" data-id="${item.id}"><i class="ri-shopping-cart-line" id="shop"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="S-s1-slider3" style="background-image:url('${item.image[2]}')">
                  <div class="icon">
                    <p>Add to Cart</p>
                    
                    <button class="Products-quantity" data-id="${item.id}"><i class="ri-shopping-cart-line" id="shop"></i>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="text">
            <h1>${item.name}</h1>
            <div class="pp">
              <del><p>$${item.oldPrice}.00</p></del>
              <p>$${item.Price}.00</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  
  document.querySelectorAll('.Products-quantity').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute("data-id");

      const product = products.find(p => p.id == id);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const isExist = cart.find(item => item.id == id);

      if (!isExist) {
      product.quantity = 1;
      cart.push(product);
    } else {
      isExist.quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Product Added:", product);
     
      cartCount++;
      document.getElementById('products-counts').innerText = cartCount;
    });
  });

 
  document.querySelectorAll('.mySwiper').forEach(swiperEl => {
    new Swiper(swiperEl, {
      pagination: { el: swiperEl.querySelector('.swiper-pagination'), clickable: true }
    });
  });
}


window.Category = function(category) {
  const filtered = products.filter(p => p.Category === category);
  displayProducts(filtered);
};


document.querySelector(".S-s1-text button").addEventListener("click", (() => {
     document.querySelector(".S-s1-column1").classList.add("S-s1-column1-js")
     setTimeout(() => {
         document.querySelector(".S-s1-column1 .cross button").classList.add("cross-rotate");
    }, 350);
     
}))

document.querySelector(".S-s1-column1 .cross button").addEventListener("click", (() => {
     document.querySelector(".S-s1-column1").classList.remove("S-s1-column1-js")
     document.querySelector(".S-s1-column1 .cross button").classList.remove("cross-rotate");
}))
