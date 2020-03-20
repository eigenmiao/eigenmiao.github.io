function muloading(){
    var forediv = document.getElementById('forediv');
    var foreimg = document.getElementById('foreimg');

    foreimg.style.transition = "all 0.65s cubic-bezier(.5,0,1,.5)";

    foreimg.style.transform = "scale(1)";

    if (window.innerHeight < window.innerWidth) {
        forediv.style.height = "100%";
        forediv.style.width = "auto";

        foreimg.style.height = "100%";
        foreimg.style.width = "auto";
        foreimg.style.marginTop = "0%";
    } else {
        forediv.style.height = "auto";
        forediv.style.width = "100%";

        foreimg.style.height = "auto";
        foreimg.style.width = "160%";
        foreimg.style.marginLeft = "-30%";
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
