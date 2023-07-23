// fancybox js
let fancyTimer = setInterval(function(){
  if(!window.$){
    return;
  }
  $(document).ready(function() {
    $(".markdown-body img").each(function () {
      if($(this).parent().get(0).tagName.toLowerCase() === "a") {
        return;
      }
      // $(this).attr("data-fancybox", "gallery"); // if you add 'data-fancybox', img will display after showed
      var element = document.createElement("a");
      $(element).attr("data-fancybox", "gallery");
      $(element).attr("style", "text-decoration: none; outline: none; border: 0px none transparent;");
      // 判断是否启用了lazyload图片懒加载
      if ($(this).attr("data-original")) {
        $(element).attr("href", $(this).attr("data-original"));
      } else {
        $(element).attr("href", $(this).attr("src"));
      }
      
      // Add img caption by PeDev.
      let altText = $(this).attr("alt");
      $(element).attr("data-caption", altText);
      
      let altCaption = document.createElement("div");
      $(altCaption).attr("class", "img-alt");
      $(altCaption).text(altText);
      
      $(this).wrap(element);
      $(this).after(altCaption);
    });

    clearInterval(fancyTimer);
  });
}, 10);
