$( document ).ready(function () {
    $(".moreBox").slice(0, 6).show();
      if ($(".moreBox:hidden").length != 0) {
        $("#loadMore").show();
      }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 6).fadeIn('slow');
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
      $('html,body').animate({
        scrollTop: $(this).offset().bottom
      }, 2500);
    });
});