// Custom Scripts
// Custom scripts
// Mobile Burger
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Navbar breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

// Call if we need to fix menu when scroll
function fixedNav() {
    const nav = document.querySelector('nav')

    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}
window.addEventListener('scroll', fixedNav)





// Search
var x = document.getElementsByClassName('search__input')[0];
function toggleSearch() {
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
    console.log(x.style);
}
x.addEventListener("click", toggleSearch());





// Swiper
var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 3,
    // spaceBetween: 30,
    // slidesPerGroup: 3,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        // when window width is >= 768px
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});






// Tabs
function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active')
