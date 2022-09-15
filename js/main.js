window.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".consultation__sec");
    let buttons = document.querySelectorAll(".work__item");

    buttons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            elements.forEach(el => {
                el.classList.remove("active");
                el.classList.add("hidden");
            });
            elements[i].classList.remove("hidden");
            elements[i].classList.add("active");
        });
    });
    let burger = document.querySelector(".header__more");
    let burgerList = document.querySelector(".burger");
    burger.addEventListener("click", () => {
        burgerList.classList.toggle("hidden");
        burgerList.classList.add("burger-active");
    });

    let burgerBtn = document.querySelector(".burger__btn");
    burgerBtn.addEventListener("click", () => {
        burgerList.classList.toggle("burger-active");
        burgerList.classList.add("hidden");
    });

    let searchOn = document.querySelector(".search-on");
    let searchOff = document.getElementById("off-btn");
    let searchEl = document.querySelector(".search");


    searchOn.addEventListener("click", () => {
        searchEl.classList.toggle("search-hidden");
        searchEl.classList.add("search-active");
    });

    searchOff.addEventListener("click", () => {
        searchEl.classList.toggle("search-active");
        searchEl.classList.add("search-hidden");
    });

    const checkbox = document.getElementById("label-ref");
    const checkboxInner = document.getElementById("AGREE");

    checkbox.addEventListener("click", () => {
       debugger;
       if(checkboxInner.hasAttribute("checked")) {
        checkboxInner.removeAttribute("checked");
       } else {
        checkboxInner.setAttribute("checked", "checked");
       }
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(function() {
        $(".faq__list").accordion({
            collapsible: true,
            active: false
        })
    });
});
