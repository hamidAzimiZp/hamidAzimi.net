$('.alert').alert();
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$(function(){
  $("[data-toggle='popover']").popover()
})
// side menu
$(document).ready(function(){
  $('div.btn-toggle').click(function(){
    $('nav.sideBar').toggleClass('btn-toggle-margin');
    $('div.sideMenu').toggleClass('btn-toggle-margin')
  })
  $('div.wrapper').click(function(){
    $('nav.sideBar').removeClass('btn-toggle-margin');
    $('div.sideMenu').removeClass('btn-toggle-margin')
  })
})
// smoothScroll
$(document).ready(function(){
  function smoothScrollTo(y){
    var step = 20;
    if (y < window.scrollY){
      step *= -1;
    }
    if (Math.abs(y - scrollY) <= step){
      return;
    }
    window.scrollBy(0,step)
    setTimeout(function () {
      smoothScrollTo(y)
    },5);
  }
  (function scrollTop() {
    var btn = document.createElement('span');
    btn.className="icon-arrow-circle-o-up d-none d-lg-block";
    btn.id = "goUp";
    document.body.appendChild(btn);
    function setGoUpVisibility(){
      if(window.scrollY <= 350){
        btn.style.opacity = 0
      }else {
        btn.style.opacity = 1
      }
    }
    window.addEventListener('scroll',setGoUpVisibility);
    btn.addEventListener('click',function () {smoothScrollTo(0)})
  }())
})
$(document).ready(function(){
  if($('div.helloAlert').hasClass('hide')){
    $('div.helloAlert').removeClass('hide');
    $('div.helloAlert').addClass('show')
    $('div.helloAlert').addClass('showAlert');
    setTimeout(function(){
      $('div.helloAlert').removeClass('show');
      $('div.helloAlert').addClass('hide')
    },10000)
  }else{
    $('div.helloAlert').removeClass('show');
    $('div.helloAlert').addClass('hide')
  }
  $('.helloAlert .close-btn').click(function(){
    if($('div.helloAlert').hasClass('hide')){
      $('div.helloAlert').removeClass('hide');
      $('div.helloAlert').addClass('show')
      $('div.helloAlert').addClass('showAlert');
    }else{
      $('div.helloAlert').removeClass('show');
      $('div.helloAlert').addClass('hide')
    }
  })
})
// side Menu
$(document).ready(function(){
  $('.hasBtn1').click(function(){
      $('nav.sideBar ul .zpHas-sub1').toggleClass('show')
      $(this).children('span').toggleClass('zpRotate');
  })
  $('.hasBtn2').click(function(){
      $('nav.sideBar ul .zpHas-sub2').toggleClass('show')
      $(this).children('span').toggleClass('zpRotate');
  })
  $('.hasBtn3').click(function(){
      $('nav.sideBar ul .zpHas-sub3').toggleClass('show')
      $(this).children('span').toggleClass('zpRotate');
  })
  $('nav.sideBar ul li ').click(function(){
      $(this).addClass('active').siblings().removeClass('active')
  })
})

// for progress scrolla myBar
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll =document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
