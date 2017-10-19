$(".like_button button").on("click", function() {
  var $count = $(this).next();
  $count.html($count.html() * 1 + 1);
  console.log(count);
};
