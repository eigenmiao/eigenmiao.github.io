var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://gitee.com/eigenmiao/rtos/raw/master/webp/143c54707674528dfb89ae1c4c1afd3c.webp");
        document.title = 'Σ(っ °Д °;)っ页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://gitee.com/eigenmiao/rtos/raw/master/webp/143c54707674528dfb89ae1c4c1afd3c.webp");
        document.title = 'ヾ(´･ω･｀)ﾉ 噫又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
