let tx = $("#tx")
let ty = $("#ty")
let tz = $("#tz")
let rx = $("#rx")
let ry = $("#ry")
let rz = $("#rz")
let s = $("#s")
let swx = $("#swx")
let swy = $("#swy")
let obj = {
    tx: 0,
    ty: 0,
    tz: 0,
    rx: 0,
    ry: 0,
    rz: 0,
    s: 1,
    swx: 0,
    swy: 0,
    time:1,
    cb:"",
    op:1,
    start:"0%",
    end:"100%"
}
let copy1 = $(".copy1")
let copy2 = $(".copy2")
tx.blur(function () {
    obj.tx = $(this).val() ? $(this).val() : 0
})
ty.blur(function () {
    obj.ty = $(this).val() ? $(this).val() : 0
})
tz.blur(function () {
    obj.tz = $(this).val() ? $(this).val() : 0
})
rx.blur(function () {
    obj.rx = $(this).val() ? $(this).val() : 0
})
ry.blur(function () {
    obj.ry = $(this).val() ? $(this).val() : 0
})
rz.blur(function () {
    obj.rz = $(this).val() ? $(this).val() : 0
})
s.blur(function () {
    obj.s = $(this).val() ? $(this).val() : 0
})
swx.blur(function () {
    obj.swx = $(this).val() ? $(this).val() : 0
})
swy.blur(function () {
    obj.swy = $(this).val() ? $(this).val() : 0
})
// 删除规则
function delKeyFrames(name) {
    var rules = sheet.cssRules;
    for (var i = 0; i < rules.length; i++) {
      if (rules[i].type === CSSRule.KEYFRAMES_RULE && rules[i].name === name) {
        sheet.deleteRule(i);
        break;
      }
    }
  }
// 创建一个新的样式表
var styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

// 获取新创建的样式表对象
var sheet = styleSheet.sheet;

// 创建 keyframes 规则字符串
var keyframes = ""
// 创建执行动画规则
let execute = ""
$(".box input").click(function () {
    keyframes = `@keyframes lance {
        ${obj.start} { transform: translateX(${obj.tx}px) translateY(${obj.ty}px) translateZ(${obj.tz}px) rotateX(${obj.rx}deg) rotateY(${obj.ry}deg) rotateZ(${obj.rz}deg) scale(${obj.s}) skewX(${obj.swx}deg) skewY(${obj.swy}deg) ;opacity:${obj.op}}
        ${obj.end} { transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1) skewX(0deg) skewY(0deg) ;opacity:1}
      }`
    // 在样式表中插入新的规则
    sheet.insertRule(keyframes, sheet.cssRules.length);
    copy1.text(keyframes)
    execute = `${obj.time}s lance ${obj.cb || "linear"}`
    copy2.text(`animate: ${execute}`)
    // 使用新的动画效果

    var  element = document.querySelector(".box div")
    element.style.animation = execute;
    setTimeout(() => {
        delKeyFrames("lance")
    }, 2000);
})

$(".copy1").focus(function(){
    $(this).select()
})
$(".copy2").focus(function(){
    $(this).select()
})
$(".cb input").click(function(){
    obj.cb = $(this)[0].name ? $(this)[0].name : "linear"
    execute = `${obj.time}s lance ${obj.cb || "linear"}`
    copy2.text(`animate: ${execute}`)
})
$(".scb").blur(function(){
    obj.cb = `cubic-bezier(${$(this).val()})` ? `cubic-bezier(${$(this).val()})` : obj.cb
    execute = `${obj.time}s lance ${obj.cb || "linear"}`
    copy2.text(`animate: ${execute}`)
})
$(".etc .op input").change(function(){
    keyframes = `@keyframes lance {
        ${obj.start} { transform: translateX(${obj.tx}px) translateY(${obj.ty}px) translateZ(${obj.tz}px) rotateX(${obj.rx}deg) rotateY(${obj.ry}deg) rotateZ(${obj.rz}deg) scale(${obj.s}) skewX(${obj.swx}deg) skewY(${obj.swy}deg) ;opacity:${obj.op}}
        ${obj.end} { transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1) skewX(0deg) skewY(0deg) ;opacity:1}
      }`
      $(".etc .op").addClass("op1")
      setTimeout(function(){
        $(".etc .op").removeClass("op1")
      },1000)
    if($(this)[0].checked){
        obj.op = 0
        copy1.text(keyframes)
    }else{
        obj.op = 1
        copy1.text(keyframes)
    }
})

$(".etc .leave input").change(function(){
    keyframes = `@keyframes lance {
        ${obj.start} { transform: translateX(${obj.tx}px) translateY(${obj.ty}px) translateZ(${obj.tz}px) rotateX(${obj.rx}deg) rotateY(${obj.ry}deg) rotateZ(${obj.rz}deg) scale(${obj.s}) skewX(${obj.swx}deg) skewY(${obj.swy}deg) ;opacity:${obj.op}}
        ${obj.end} { transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1) skewX(0deg) skewY(0deg) ;opacity:1}
      }`
      $(".etc .leave").addClass("op2")
      setTimeout(function(){
        $(".etc .leave").removeClass("op2")
      },1000)
    if($(this)[0].checked){
        obj.start = "100%"
        obj.end = "0%"
        copy1.text(keyframes)
    }else{
        obj.start = "0%"
        obj.end = "100%"
        copy1.text(keyframes)
    }
})
$(".etc .showWord input").change(function(){
    $(".etc .showWord").addClass("op3")
      setTimeout(function(){
        $(".etc .showWord").removeClass("op3")
      },1000)
    if($(this)[0].checked){
        $("#graphics").css("display","none")
        $("#word").css("display","block")
    }else{
        $("#graphics").css("display","block")
        $("#word").css("display","none")
    }
})
$(".wordInput input").blur(function(){
    let str = $(this).val() ? $(this).val() : "lance"
    $("#word").text(str)
})
$(".time input").blur(function(){
    obj.time = $(this).val() ? $(this).val() : 1
    execute = `${obj.time}s lance ${obj.cb || "linear"}`
    copy2.text(`animate: ${execute}`)
})
