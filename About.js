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




// About Menu Button      Start
    const About_menu = document.querySelector(".About-menu");
    const menu_div = document.querySelector(".menu-div");
    const menu_content = document.querySelector(".menu-content");
    const Cross = document.querySelector(".About-cross");

    About_menu.addEventListener("click", (() => {
        menu_div.classList.add("menu-div-js");
        menu_content.classList.add("menu-content-js");
    }));
    Cross.addEventListener("click", (() => {
        menu_div.classList.remove("menu-div-js");
        menu_content.classList.remove("menu-content-js");
    }))
    // About Menu Button      End


  //  About S4 video       Start

  const video_btn = document.querySelector(".A-s4-video-btn");
  const video_div = document.querySelector(".A-s4-video-div");
        video_btn.addEventListener("click", (() => {

        video_div.classList.add("A-s4-video-div-js");
        document.getElementById("video-div").innerHTML = `<iframe width="90%" height="90%" src="https://www.youtube.com/embed/QsY8fnvMn6c?si=Q-ePJnt9PW9MqS9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }))
  //  About S4 video       End


  // About Section 5 Counters    Start

     
   gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".A-s5-content", 
    start: "top 80%",
    once: true,           
    onEnter: () => {

  let counter1 = 0;
  let clear1 =  setInterval(() => {
    counter1++;
    if(counter1 >= 130){
      clearInterval(clear1);
    }
    document.getElementById("A-s5-counter1").innerHTML = `+ ${counter1} %`;

  }, 20);

    let counter2 = 0;
    let clear2 =  setInterval(() => {
    counter2++;
    if(counter2 >= 150){
      clearInterval(clear2);
    }
    document.getElementById("A-s5-counter2").innerHTML = `+ ${counter2}K`;

  }, 17);

    let counter3 = 0;
    let clear3 =  setInterval(() => {
    counter3++;
    if(counter3 >= 15){
      clearInterval(clear3);
    }
    document.getElementById("A-s5-counter3").innerHTML = `+ ${counter3} K`;

  }, 160);

      }
});


  


  // About Section 5 Counters    End


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