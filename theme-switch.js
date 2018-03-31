$(function () {
  $("#checkbox").on("click", function () {
    $(".body").removeClass("body").addClass("new-body");
    
    var checkbody = $("#new-body");
    
    if (checkbody) {
      $("#checkbox").on("click", function () {
        $(".new-body").removeClass("new-body").addClass("body");
      });
    }
  });
});