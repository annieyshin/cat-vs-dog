$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
       $("body").addClass("green-background");
    });

    $("button#default").click(function() {
  $("body").removeClass();
  $("body").addClass("default-background");
});

  $("button#cat").click(function() {
    $("ul#cat-says").append("<li>Meow ~ ^.^ ~</li>");
      $("ul#cat-says").before("<br>puuuuuurrrrr<br>");


    });

  $("button#dog").click(function() {
    $("ul#dog-says").prepend("<li>Woof 0 - 0</li>");
      $("ul#dog-says").after("<br>me want scooby snacks <br>");

    });

  $("button#dogpicbutton").click(function() {
    $(".dogpic").toggle();

  });

  $("button#catpicbutton").click(function() {
    $(".catpic").toggle();

  });


});
