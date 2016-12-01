Pace.on("done", function() {
    var CLS_HIDE = "hide",
        currentIndex = 0,
        timer_step1;

    $("#wrap").show();
    $("#pager").show();

    var myslider=new iSlider({
        wrap:'#wrap',
        item:'.item',
        onslide:function (index) {}
    });
});

$(function() {
    var myAuto = document.getElementById('myaudio');
    myAuto.play();

    $.ajax({
        url: "http://api.xiao5market.com/api/jsConfig?url=" + encodeURIComponent(location.href),
        dataType: "jsonp",
        success: function(wxConfig) {
            console.log("success", wxConfig);
            wx.config(wxConfig);
        }
    });
});