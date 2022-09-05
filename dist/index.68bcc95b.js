const $6d7061d7c053ca0f$var$string = `
/* 先来个皮肤，占据下半部分屏幕 */
.skin {
    position: relative;
    background-color: rgb(255, 230, 0);
    min-height: 50vh;
}

/* 鼻子：圆形 border 的1/4 */
.nose {
    position: relative;
    border: 12px solid black;
    border-radius: 50%;
    border-color: #000 transparent transparent;
    border-bottom: none;
    width: 0;
    height: 0;
    left: 50%;
    top: 130px;
    margin-left: -12px;
    z-index: 10;
}

/* 鼻子要会动 鼠标浮上*/
@keyframes wave {
    0% {transform: rotate(0deg);}
    33% {transform: rotate(8deg);}
    66% {transform: rotate(-8deg);}
    100% {transform: rotate(0deg);}
}
.nose:hover {
    transform-origin: center bottom;
    animation: wave 230ms infinite linear;
}

/* 眼睛分左右，眼里要有光 */
.eye {
    border: 3px solid #000;
    background: rgb(45, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 80px;
    margin-left: -25px;
}
.eye::before {
    content: '';
    border: 3px solid #000;
    width: 28px;
    height: 28px;
    display: block;
    border-radius: 50%;
    background: #fff;
    position: relative;
    left: 4px;
}
.eye.left {
    transform: translateX(-80px);
}
.eye.right {
    transform: translateX(80px);
}

/*
嘴巴有点复杂，分上下两部分
上嘴唇分左右，分别是线条圆角矩形的1/4
下嘴唇大椭圆套小椭圆
*/
.mouth {
    width: 160px;
    height: 160px;
    position: absolute;
    left: 50%;
    top: 140px;
    margin-left: -80px;
}
.mouth .up .lip {
    z-index: 1;
    background: rgb(255, 230, 0);
    border: 3px solid black;
    height: 40px;
    width: 80px;
    border-top-color: transparent;
    position: absolute;
}
.mouth .up .lip.left {
    border-radius: 0 0 0 85%;
    border-right-color: transparent;
    transform: rotate(-25deg);
    left: -1px;
}
.mouth .up .lip.right {
    border-radius: 0 0 85% 0;
    border-left-color: transparent;
    transform: rotate(25deg);
    left: 81px;
}
.mouth .down {
    height: 150px;
    width: 100%;
    position: absolute;
    top: 16px;
    overflow: hidden;
}
.mouth .down .yuan1 {
    border: 3px solid #000;
    width: 140px;
    height: 600px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -70px;
    border-radius: 100px/400px;
    background: rgb(155, 0, 10);
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    width: 120px;
    height: 120px;
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: rgb(255, 91, 93);
}

/* 最后是红脸蛋 */
.face {
    position: absolute;
    left: 50%;
    margin-left: -35px;
    border: 3px solid #000;
    width: 70px;
    height: 70px;
    top: 170px;
    background: rgb(255, 0, 0);
    border-radius: 50%;
}
.face.left {
    transform: translateX(-150px);
}
.face.right {
    transform: translateX(150px);
}`;
var $6d7061d7c053ca0f$export$2e2bcd8739ae039 = $6d7061d7c053ca0f$var$string;


const $f9d83769637380d8$var$code = document.querySelector('#code');
const $f9d83769637380d8$var$styleTag = document.querySelector('#styleTag');
let $f9d83769637380d8$var$n = 1;
let $f9d83769637380d8$var$time = 100;
let $f9d83769637380d8$var$id;
const $f9d83769637380d8$var$player = {
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'mid',
        '#btnSlow': 'slow',
        '#btnFast': 'fast'
    },
    init: ()=>{
        $f9d83769637380d8$var$code.innerHTML = $6d7061d7c053ca0f$export$2e2bcd8739ae039.substring(0, $f9d83769637380d8$var$n);
        $f9d83769637380d8$var$styleTag.innerHTML = $6d7061d7c053ca0f$export$2e2bcd8739ae039.substring(0, $f9d83769637380d8$var$n);
        $f9d83769637380d8$var$player.bindEvents();
        $f9d83769637380d8$var$player.play();
    },
    bindEvents: ()=>{
        for(let key in $f9d83769637380d8$var$player.events)if ($f9d83769637380d8$var$player.events.hasOwnProperty(key)) {
            const value = $f9d83769637380d8$var$player.events[key];
            document.querySelector(key).onclick = $f9d83769637380d8$var$player[value];
        }
    },
    run: ()=>{
        $f9d83769637380d8$var$n += 1;
        if ($f9d83769637380d8$var$n > $6d7061d7c053ca0f$export$2e2bcd8739ae039.length) {
            window.clearInterval($f9d83769637380d8$var$id);
            return;
        }
        $f9d83769637380d8$var$code.innerHTML = $6d7061d7c053ca0f$export$2e2bcd8739ae039.substring(0, $f9d83769637380d8$var$n);
        $f9d83769637380d8$var$styleTag.innerHTML = $6d7061d7c053ca0f$export$2e2bcd8739ae039.substring(0, $f9d83769637380d8$var$n);
        $f9d83769637380d8$var$code.scrollTop = $f9d83769637380d8$var$code.scrollHeight;
    },
    play: ()=>{
        $f9d83769637380d8$var$id = setInterval($f9d83769637380d8$var$player.run, $f9d83769637380d8$var$time);
    },
    pause: ()=>{
        return window.clearInterval($f9d83769637380d8$var$id);
    },
    mid: ()=>{
        $f9d83769637380d8$var$player.pause();
        $f9d83769637380d8$var$time = 100;
        $f9d83769637380d8$var$player.play();
    },
    slow: ()=>{
        $f9d83769637380d8$var$player.pause();
        $f9d83769637380d8$var$time = 300;
        $f9d83769637380d8$var$player.play();
    },
    fast: ()=>{
        $f9d83769637380d8$var$player.pause();
        $f9d83769637380d8$var$time = 0;
        $f9d83769637380d8$var$player.play();
    }
};
$f9d83769637380d8$var$player.init();


//# sourceMappingURL=index.68bcc95b.js.map
