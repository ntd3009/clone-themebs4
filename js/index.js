
$(document).ready(function () {
  const $ = jQuery(this);
  
  const btnOpenNavHeader = document.getElementById('js-show-hide-navbar');
  const navbar = document.getElementById('navbar-header');

  let openNavbar = function () {
    btnOpenNavHeader.addEventListener('click', function () {
      navbar.classList.toggle('open');
    });
  };

  let megaMenuRps = function () {
    const mb = window.matchMedia("(max-width: 991px)");
    if (mb.matches) {
      if(!navbar.classList.contains('nav-mobile')) {
        navbar.classList.add('nav-mobile');
      }
      
      let megaDropLv1 = $.find('.nav-mobile .mega-drop-lv1');
      let megaDropLv2 = $.find('.nav-mobile .mega-drop-lv2');

      let removeAllActive = function (items) {
        items.each(function (i) {
          let hasClass = this.classList.contains('active');
          if (hasClass) {
            this.classList.remove('active');
          }
        });
      }
    
      let eventAc = function (dom, dom2) {
        let heads = dom.children('.btn-drop-menu');
        heads.each(function (i) {
          this.addEventListener('click', () => {
            let wrap = this.parentNode;
            let currentHasAc = wrap.classList.contains('active');
            if (!currentHasAc) {
              removeAllActive(dom);
              if(dom2) {
                removeAllActive(dom2);
              }
              wrap.classList.add('active');
            } else {
              removeAllActive(dom);
              if(dom2) {
                removeAllActive(dom2);
              }
            }
          });
        });
      }

      openNavbar();
      eventAc(megaDropLv1, megaDropLv2);
      eventAc(megaDropLv2);
    } else {
      if(navbar.classList.contains('nav-mobile')) {
        navbar.classList.remove('nav-mobile')
      }
    }
    
    window.addEventListener('resize', function () {
      megaMenuRps();
      if (navbar.classList.contains('open')) {
        navbar.classList.remove('open');
      }
    });
  }
  megaMenuRps();

  // 
  $.find('.hero [data-fancybox]').fancybox({
    youtube: {
      controls: 1,
      showinfo: 0
    },
    vimeo: {
      color: 'f00'
    }
  });
  // 
  $.find('.clients .owl-carousel.client-items').owlCarousel({
    margin: 30,
    nav: false,
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3
      },
      992: {
        items: 5
      }
    }
  });

  //



});
