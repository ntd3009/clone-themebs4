$(document).ready(function(){
  const $ = jQuery(this);
  const mediaQMWidth991 = window.matchMedia("(max-width: 991px)");

  const btnShowHide = document.getElementById('js-show-hide-navbar');
  const navbar = document.getElementById('navbar-header');

  
  function navbarAction() {
    btnShowHide.addEventListener('click', function() {
      navbar.classList.toggle('open');
    });
    
    window.addEventListener('resize', function() {
      if(navbar.classList.contains('open')) {
        navbar.classList.remove('open');
      }
    });
  };

  let megaDropLv1 = $.find('.mega-drop-lv1');
  let megaDropLv2 = $.find('.mega-drop-lv2');

  let removeAllActive = function(items ) {
    items.each( function(i) {
      let hasClass = this.classList.contains('active');
      if(hasClass) {
        this.classList.remove('active');
      }
    });
  }

  let eventAc = function(dom) {
    let heads = dom.children('.btn-drop-menu');
  
    heads.each( function(i) {
      this.addEventListener('click', () => {
        let wrap = this.parentNode;
        let currentHasAc = wrap.classList.contains('active');
        if(!currentHasAc) {
          removeAllActive(dom);
          removeAllActive(megaDropLv2);
          wrap.classList.add('active');
        } else {
          removeAllActive(dom);
          removeAllActive(megaDropLv2);
        }
      });
    });
  }

  let checkMedia = function(mq) {
    if (mq.matches) {
      eventAc(megaDropLv1);
      eventAc(megaDropLv2);
    }
  }
  checkMedia(mediaQMWidth991);
  navbarAction();
  
  $.find('.hero [data-fancybox]').fancybox({
    youtube: {
      controls : 1,
      showinfo : 0
    },
    vimeo: {
      color : 'f00'
    }
  });

});



