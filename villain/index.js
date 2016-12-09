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
        url: "https://ljspread.hongdianfund.com/wxShare",
        dataType: "jsonp",
        data: {
            channel: "muffin",
            showUrl: encodeURIComponent(location.href)
        },
        success: function(wxConfig) {
            console.log("success", wxConfig);
            wx.config(JSON.parse(wxConfig.content));

            wx.ready(function(){
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

                wx.hideMenuItems({
                    menuList: ["menuItem:share:appMessage", "menuItem:copyUrl", "menuItem:originPage"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
                });
            });

        }
    });
});