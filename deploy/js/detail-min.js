! function () {
    "use strict";
    let e = [{
        title: "NOTHING TO PROVE",
        description: "Sketching is a pure form of creative exploration. Once I started studying design at Drexel I was able to explore my illustrative style and creative expression. This is when I realized there is nothing to prove. ",
        images: ["./img/projects/turtles/sk.png", "./img/projects/turtles/frame.png"]
    }, {
        title: "Mix-Midea",
        description: "Ut id dui sed sapien sagittis commodo. Ut semper facilisis arcu eu pretium. Vivamus sit amet pharetra erat. Curabitur a sem sed dui accumsan tincidunt. Aliquam felis mi, eleifend at urna vel, laoreet malesuada risus. Morbi pellentesque fringilla purus eu rutrum. Nullam convallis aliquam risus. Donec ex augue, semper et felis vel, tempor posuere erat.",
        images: ["./img/projects/cows/duke.png", "./img/projects/cows/art.png"]
    }, {
        title: "PHOTO",
        description: "Duis ultricies feugiat erat eget tempor. Vestibulum bibendum est eu posuere suscipit. Pellentesque tincidunt sapien vitae elit vulputate vestibulum. Proin vel molestie ex. Ut vehicula nibh eu laoreet commodo. Aenean volutpat, nibh in faucibus semper, ipsum est feugiat ex, in volutpat sapien lacus ac massa. Vivamus vel nisi et sapien ullamcorper luctus sit amet sed magna. Sed porttitor sem id eros rhoncus aliquam. Phasellus dapibus, purus a consequat venenatis, nunc diam aliquam tellus, eget congue ante risus a augue. Morbi ut massa ut turpis consequat tincidunt.",
        images: ["./img/projects/zoo/zoo-1.jpg", "./img/projects/zoo/zoo-2.jpg"]
    }];
    window.addEventListener("load", (function () {
        console.log(e[localStorage.getItem("indexValue")].images[1]), document.querySelector("#detail h1").innerHTML = e[localStorage.getItem("indexValue")].title, document.querySelector("#detail p").innerHTML = e[localStorage.getItem("indexValue")].description;
        let t = this.document.querySelectorAll(".detail-imgs");
        t.forEach(((i, u) => {
            t[u].style.backgroundImage = "url(" + e[localStorage.getItem("indexValue")].images[u] + ")"
        })), document.querySelector("#detail-hero").style.backgroundImage = "url(" + e[localStorage.getItem("indexValue")].images[1] + ")", document.querySelector("#moreImg").style.backgroundImage = "url(" + e[localStorage.getItem("indexValue")].images[0] + ")"
    })), document.querySelector("button").addEventListener("click", (() => {
        location.href = "index.html"
    }))
}();