/* 
自定义js
*/
var getDate = function(){
   
   var oldTime = new Date(2015,09,01);
   var nowTime = new Date();
   var ot = oldTime.getTime();
   var nt = nowTime.getTime();     
   var time = (nt - ot)/(1000*3600*24); // days time
   var year = time/365;// years
   var month = (time%365)/30;// month
   var day = (time%365)%30;

   return "已开博 " + parseInt(year) + "年" + parseInt(month) + "月" + parseInt(day) + "天";
}
var lastArticleDate = function(){
  var lastDate = $($(".pl__date")[0]).attr("data-date");
  var lastDate = new Date(lastDate);
  var y = lastDate.getFullYear();
  var m = lastDate.getMonth()+1;
  var d = lastDate.getDate();
  return y + "年" + m + "月" + d + "日";
}
$(".timer").text(getDate());
setTimeout(function(){
  var length = $("#pl__container").find("a").length;
  $(".total_article").text("已发表" + length + "篇文章，最近一篇文章发表于" + lastArticleDate());
  

},500);