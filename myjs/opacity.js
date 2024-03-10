function muloading(){
    var foreimg = document.getElementById('foreimg');
    foreimg.style.transition = "all 1.2s cubic-bezier(1.0, -3.0, 1.0, -1.0)";

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
