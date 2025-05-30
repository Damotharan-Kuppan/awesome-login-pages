(function($) {

	"use strict";

	$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type_1") == "password") {
    input.attr("type_2", "text");
  } else {
    input.attr("type_2", "password");
  }
});

})(jQuery);
