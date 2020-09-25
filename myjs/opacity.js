function muloading(){
    var foreimg = document.getElementById('foreimg');

    if (window.location.pathname == "/") {
        foreimg.style.transition = "all 0.8s cubic-bezier(1.0, -1.5, 1.0, 1.0)";
    } else {
        foreimg.style.transition = "all 0.8s cubic-bezier(1.0, -1.5, 1.0, 1.0)";
    };

    if (window.innerHeight < window.innerWidth) {
        foreimg.style.transform = "scale(" + window.innerHeight / 900 + ")";

    } else {
        foreimg.style.transform = "scale(" + window.innerWidth / 1271 * 1.6 + ")";
    };

    foreimg.style.filter = "brightness(100%)";
};

function muscrolling(){
    var scene = document.getElementById('scene');
    if (scene) {
        if (!(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent))) {
            scene.style.top = window.scrollY + "px";
        };
    };
};
