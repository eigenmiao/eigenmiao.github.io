function muloading(){
    var foreimg = document.getElementById('foreimg');

    foreimg.style.transition = "all 0.65s cubic-bezier(.5,0,1,.5)";

    if (window.innerHeight < window.innerWidth) {
        foreimg.style.transform = "scale(" + window.innerHeight / 900 + ")";

    } else {
        foreimg.style.transform = "scale(" + window.innerWidth / 1271 * 1.3 + ")";
    };

    foreimg.style.opacity = 1.0;
};

function muscrolling(){
    var scene = document.getElementById('scene');
    if (scene) {
        if (!(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent))) {
            scene.style.top = window.scrollY + "px";
        };
    };
};
