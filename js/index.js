$(".list li").click(function(){
            $(this).addClass("active").siblings().removeClass("active")
            var  index = $(this).index()
            $(".box ul").eq(index).addClass("active").siblings().removeClass("active")
        })
let liItem = $(".box ul li")
liItem.click(function(){
    // console.log($(this).text())
    setTimeout(delClass,1000);
    $("#lance").addClass($(this).text())
    $(this).addClass("active").siblings().removeClass("active")
})
function delClass(){
    $("#lance").removeClass()
}
$(".explain div").click(function(){
    $(this).addClass("item").siblings().removeClass("item")
    var index = $(this).index()
    $(".illustrate div").eq(index).addClass("item").siblings().removeClass("item")
})
$("#self").click(function(){
    location.href = "../css/lance.css"
})
$("#animate").click(function(){
    location.href = "../css/animate.css"
})
$("#animate2").click(function(){
    location.href = "https://animate.style/"
})
$("#test").click(function(){
    location.href = "../test.html"
})