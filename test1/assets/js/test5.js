/*js file*/
$(function(){

  var $btn = $(".btn");
  var $box = $(".move-box");

  $btn.click(function(){
    $box.animate({
      "left": 500
    })
  })

})//end function
