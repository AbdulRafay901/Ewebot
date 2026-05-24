const links = document.querySelector(".links");
// const sticky_links = document.querySelector(".sticky-link")
const menu = document.querySelectorAll(".menu");
const cross = document.querySelectorAll(".cross");

menu.forEach(menus => {
    menus.addEventListener("click", (() => {
        links.classList.add("links-javascript");
        sticky_links.classList.add("links-javascript");
    }))
})
cross.forEach(crosses => {
   crosses.addEventListener("click", (() => {
       links.classList.remove("links-javascript");
       sticky_links.classList.remove("links-javascript");
   }))
})


const sticky = document.querySelector(".sticky-navbar-container");
const sticky_links = document.querySelector("#sticky-links");
window.addEventListener("scroll", (() => {
    if(window.scrollY > 220){
        sticky.classList.add("sticky-javascript");
        sticky_links.classList.add("links-fixed");
        links.classList.remove("links-javascript");
        
    }else{
        sticky.classList.remove("sticky-javascript");
        sticky_links.classList.remove("links-fixed");
        
    }
}))

// Type  Script           Start

    const typed = new Typed('.changing', {
      strings: ['made sales', 'made simple','made ideas'], 
      typeSpeed: 60,   
      backSpeed: 40,     
      backDelay: 1000,   
      startDelay: 0,   
      loop: true,        
      smartBackspace: true,
      showCursor: false

    });

    // Type  Script           End

    
   gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".s2-content", 
    start: "top 70%",
    once: true,           
    onEnter: () => {
        // ==== Tumhara Counter 1 ====
        let counter1 = 0;
        let C1 = setInterval(() => {
            counter1++;
            if (counter1 >= 150) clearInterval(C1);
            document.getElementById("counter1").innerHTML = `+${counter1} %`;
        }, 20);

        // ==== Counter 2 ====
        let counter2 = 0;
        let C2 = setInterval(() => {
            counter2++;
            if (counter2 >= 87) clearInterval(C2);
            document.getElementById("counter2").innerHTML = `+${counter2}K`;
        }, 35);

        // ==== Counter 3 ====
        let counter3 = 0;
        let C3 = setInterval(() => {
            counter3++;
            if (counter3 >= 20) clearInterval(C3);
            document.getElementById("counter3").innerHTML = `+${counter3}M`;
        }, 140);

    }
});


// Slider 2 Start

     var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
        breakpoints: {
          0:{
            slidesPerView: 1,
          spaceBetween: 20,
          },

           576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },  
        
         768: {
          slidesPerView: 1.4,
          spaceBetween: 30,
        },
      },
    });


    // Slider 2 End

    // Section 5 buttons      Start
    function buttons(buttons){

      const button = document.querySelectorAll(".section4-column1-buttons button");
      button.forEach((all) => {
          all.classList.remove("active");
      });
      event.target.classList.add("active");


      if(buttons == "All"){
        document.getElementById("p").innerHTML = 
        `<p>Ad nec unum copiosae. Sea ex everti <br>
         labores, ad option iuvaret qui. Id quo esse <br>
         nusquam.</p>`;
      }
       else if(buttons == "Marketing"){
        document.getElementById("p").innerHTML = `
        <p>Lorem ipsum dolor sit amet, sit ea impedit <br> inermis. Qui augue exerci repre hendunt <br> te.</p>
        `;
      }
       else if(buttons == "Branding"){
        document.getElementById("p").innerHTML = `
        <p>Veniam oportere ocurreret eam et. Ipsum <br> idque iusto ei quo, no labores reformidans <br> eum.</p>
        `;
      }
        else if(buttons == "Seo"){
        document.getElementById("p").innerHTML = `
        <p>Vim no nostro voluptua. Id viderer equidem <br> dignissim sea, qui elaboraret appellantur.</p>
        `;
      }
      else{
          document.getElementById("p").innerHTML = `
        <p>Nam liber putent ponderum ut, at his <br> veniam deseruisse assueverit. Te pro illud.</p>
        `;
      }
    }
    // Section 5 buttons      End

    // Section 6 loop     Start
      
    var swiper = new Swiper(".mySwiper-s6-s1", {
      slidesPerView: 2,
      spaceBetween: 0,
      speed: 35000,
      loop: true,
       autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    
    });

    
    var swiper = new Swiper(".mySwiper-s6-s2", {
      rtl: true,
      slidesPerView: 1,
      spaceBetween:0,
      speed: 35000,
      loop: true,
      allowTouchMove: false,
       autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
    
    });
  // Section 6 loop     End


  // Section 8 Slider      Start
  var swiper = new Swiper(".mySwiper-s8", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // Section 8 Slider      End



    // About Menu Button      Start
    const About_menu = document.querySelector(".About-menu");
    const menu_div = document.querySelector(".menu-div");
    const menu_content = document.querySelector(".menu-content");

    About_menu.addEventListener("click", (() => {

         alert();
    }))
    // About Menu Button      End

