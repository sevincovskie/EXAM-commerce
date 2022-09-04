let usdBtn = document.querySelector(".exchange-btn");
let exchangeItem = document.querySelector(".exchange-item");
let categoriesBtn = document.querySelector(".categories-btn");
let categoriesItem = document.querySelector(".categories-item");



  //   navigation blog hover event

let blogBtn = document.querySelector(".blog-btn")
let blogItems = document.querySelector(".blog-items")

blogBtn.addEventListener("mouseover", function () { 
    blogItems.style.display = "block"
 })

 function blogEvents() {
    blogItems.style.display = "none"
}
  //   navigation blog hover event



// Navigation shoes hover event

let shoesBtn = document.querySelector(".shoes-btn")
let shoesItem = document.querySelector(".shoes-item")

shoesBtn.addEventListener("mouseover", function () {
    shoesItem.style.display = "block"
  })
function shoesEvent() { 
    shoesItem.style.display = "none"
 }

// Navigation shoes hover event



usdBtn.addEventListener("click",function(e) {
    e.preventDefault();
    exchangeItem.classList.toggle("d-block")
  })

 categoriesBtn.addEventListener('click',function (e) {
    e.preventDefault();
    categoriesItem.classList.toggle("d-block")
  })

  $(document).ready(function(){
   
    $(".more-categories-open").click(function(e){
        e.preventDefault()
        $(".more-categories").fadeIn(500)
    })

    $(".more-categories-close").click(function(e){
        e.preventDefault()
        $(".more-categories").fadeOut(500)
    })
    // Page reload login

    setTimeout(function(){
        $(".login").show()
        $("#sign-in-bg").show()
    },3000)

    $(".close-login-btn").click(function (e) { 
        e.preventDefault();
        $(".login").hide();
        $("#sign-in-bg").hide()
     })

    //  Page reload login end

    $(".nav-sigin-btn").one(function (e) {
        e.preventDefault();
        $(".signIn-item").show(500)
      })
    $(".nav-sigin-btn").click(function(e){
        e.preventDefault();
        $(".signIn-item").toggle("d-none")
    })
    $(".hamburger-btn").click(function (e) {
        e.preventDefault();
        $(".hamburger-item").fadeToggle(500); 
      })

    $(".hamburger-close-btn").click(function (e) {
        e.preventDefault();
        $(".hamburger-item").fadeOut()
      })


    $(".chat-begin").click(function(e){
        e.preventDefault();
        $(".live-chat-item").fadeIn(500)
      });

      $(".chat-close").click(function(e){
        e.preventDefault();
        $(".live-chat-item").fadeOut(500);
      });

        $(".Information-btn").one(function(e){
            e.preventDefault();
            $(".Information-item").show()
        })

        $(".Information-btn").click(function(e){
            e.preventDefault();
            $(".Information-item").toggle("d-none");
        })

        $(".footer-category-btn").one(function(e){
            e.preventDefault();
            $(".footer-category-item").show()
        })

        $(".footer-category-btn").click(function(e){
            e.preventDefault();
            $(".footer-category-item").toggle("d-none");
        })

        $(".contactUs-btn").one(function(e){
            e.preventDefault();
            $(".contactUs-item").show()
        })

        $(".contactUs-btn").click(function(e){
            e.preventDefault();
            $(".contactUs-item").toggle("d-none");
        })

        // shop responsive 

        $(".res-price").one(function(e){
            e.preventDefault();
            $(".filter-price").show()
        })

        $(".res-price").click(function(e){
            e.preventDefault();
            $(".filter-price").toggle("d-none");
        })

        $(".res-color").one(function(e){
            e.preventDefault();
            $(".filter-color").show()
        })

        $(".res-color").click(function(e){
            e.preventDefault();
            $(".filter-color").toggle("d-none");
        })
        
        $(".res-size").one(function(e){
            e.preventDefault();
            $(".filter-size").show()
        })

        $(".res-size").click(function(e){
            e.preventDefault();
            $(".filter-size").toggle("d-none");
        })

        $(".res-tags").one(function(e){
            e.preventDefault();
            $(".product-tags").show()
        })

        $(".res-tags").click(function(e){
            e.preventDefault();
            $(".product-tags").toggle("d-none");
        })
        
    $('.owl-one').owlCarousel({
        loop:false,
        margin:40,
        nav:true,
        responsiveClass:true,
        navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            450:{
                items:2
            },
            700:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
    $('.owl-second').owlCarousel({
        loop:false,
        margin:40,
        nav:true,
        navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            450:{
                items:2
            },
            778:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })
    
    $('.owl-third').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:2
            }
        }
    })

    $('.owl-carousel-responsive').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            450:{
                items:1
            },
            700:{
                items:3,
                nav:false
            },
            1000:{
                items:5
            }
        }
    })

    $('.top-rated-product-responsive').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            450:{
                items:2
            },
            700:{
                items:3,
                nav:false
            },
            1000:{
                items:5
            }
        }
    })
    
    $('.owl-fourth').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            450:{
                items:1
            },
            780:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('.owl-fifth').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            450:{
                items:3
            },
            600:{
                items:3

            },
            1000:{
                items:6
            }
        }
    })
    
    $('.owl-sixth').owlCarousel({
        loop:false,
        margin:20,
        nav:false,
        navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    $('.owl-seventh').owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        navText : ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
  });

