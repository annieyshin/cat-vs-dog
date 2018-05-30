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

    });

  $("button#dog").click(function() {
    $("ul#dog-says").prepend("<li>Woof 0 - 0</li>");

    });

  $("button#dogpicbutton").click(function() {
    $(".dogpic").toggle();

  });

  $("button#catpicbutton").click(function() {
    $(".catpic").toggle();

  });


});
