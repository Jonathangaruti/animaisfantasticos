function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent) {
    tabContent[0].classList.add('ativo')

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion()


function scrollSuave () {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  });
}
scrollSuave()

function animacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if(sectionTop < 0) {
          section.classList.add('ativo');
        }
      })
    }

    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}

animacaoScroll()