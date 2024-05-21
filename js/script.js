const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn')
const smMenu = document.querySelector('.main-header__sm-menu')
const smMenuCloseBtn = document.querySelector('.main-header__sm-menu-close')

const smMenuLinks = document.querySelectorAll('.main-header__sm-menu-link')

smMenuBtn.addEventListener('click', () => {
  smMenu.classList.add('main-header__sm-menu--active')
})

smMenuLinks.forEach((ele) => {
  ele.addEventListener('click', () => {
    smMenu.classList.remove('main-header__sm-menu--active')

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView()
    }, 400)
  })
})

smMenuCloseBtn.addEventListener('click', () => {
  smMenu.classList.remove('main-header__sm-menu--active')
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      var classlist = [
        "animate__animated",
        "animate__fadeInUp",
        "animate__slow",
      ];
      if (entry.target.classList.contains("slide-left")){
        console.log('animated');
        classlist[1] = "animate__slideInLeft";
        classlist.pop()
      }
      else if (entry.target.classList.contains("slide-right")){
        classlist[1] = "animate__slideInRight";
        classlist.pop()
      }
      else if (entry.target.classList.contains("zoom-in"))
        classlist[1] = "animate__zoomIn";

      entry.target.classList.add(classlist[0], classlist[1], classlist[2]);
    }
  });
});

for (item of document.querySelectorAll(".animated-element")) {
  observer.observe(item);
}
