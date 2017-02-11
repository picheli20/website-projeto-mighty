window.onload = function(){
  fixHeight();
  checkMenu();
  $( window ).resize(fixHeight);
  $( window ).scroll(checkMenu);
};

function fixHeight() {
  var width = $( window ).width();
  var height = $( window ).height();
  var proportion = 0.5625;
  console.log(height - 70)
  $('#header-video').height(height - 70);
  $('#header-video').css('max-height', (width * proportion - 70) + 'px');
}

function checkMenu(){
  if(5 < $('body').scrollTop()){
    $('.navbar').addClass('navbar-colored');
  }else{
    $('.navbar').removeClass('navbar-colored');
  }
}

function onVideoLoad() {
  $('.loader').hide();
}