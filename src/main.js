let html = document.querySelector('#html');
let style = document.querySelector("#style");

let string = `/* 你好，我叫Joyce
 * 首先准备一个div
**/
#div1 {
    border: 1px solid green;
    height: 200px;
    width: 200px;
}

/* 接下来，将这个div变成一个八卦图
 * 首先变成一个圆
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/* 八卦是阴阳形成的
 * 一半黑一半白
**/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 加上两颗小球 */
#div1::after {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::before {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(()=> {
        if( string[n] === "\n") {
            string2 += "<br>";  // 展示html里的回车
        } else if( string[n] === " ") {
            string2 += "&nbsp;";  // 展示html里的空格
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,10000);
        html.scrollTo(0,10000);
        if( n < string.length - 1) {
            n += 1;
            step();
        }
    }, 0);
};

step();


