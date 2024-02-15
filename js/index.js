$(document).ready(function(){


  $(".mo_view").css({"right":"-100%"}); /* 처음 위치 */
  $(".logo_in").hide();

  $(".mo_menu_btn").click(function(){

    $(".mo_view").stop(true,true).animate({"right":"0%"});
    $(".logo_in").show();

  });

  $("#moheader .mo_view").click(function(){

    $(".mo_view").stop(true,true).animate({"right":"-100%"});
    $(".logo_in").hide();

  });

});