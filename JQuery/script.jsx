$("h1").click(function(){
    $("h1").css("color","green")
})

$("button").click(function(){
    $("h1").css("color","purple")
})

$("input").keypress(function(event){
    $("h1").text(event.key)
})

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5}).animate({opacity:1})
})

