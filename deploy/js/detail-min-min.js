! function () {
    "use strict";
    let e = [{
        title: "Turtles",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis maximus arcu mattis fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam interdum eleifend commodo. Morbi pretium egestas tincidunt. Nunc porta risus vitae nunc facilisis consequat. Integer justo ipsum, lacinia non vestibulum vel, tincidunt ut augue. Nullam elementum nunc a ultricies viverra. Duis malesuada massa eros, a euismod mauris bibendum non. Curabitur tellus erat, posuere ac leo ac, pellentesque consectetur turpis. Mauris in blandit nibh, sit amet condimentum eros. Mauris ultrices orci a ipsum hendrerit efficitur. Nunc tempor nulla dui, nec cursus urna dictum at.",
        images: ["./img/projects/turtles/sketchhero.png", "./img/projects/turtles/frame.png"]
    }, {
        title: "Cows",
        description: "Ut id dui sed sapien sagittis commodo. Ut semper facilisis arcu eu pretium. Vivamus sit amet pharetra erat. Curabitur a sem sed dui accumsan tincidunt. Aliquam felis mi, eleifend at urna vel, laoreet malesuada risus. Morbi pellentesque fringilla purus eu rutrum. Nullam convallis aliquam risus. Donec ex augue, semper et felis vel, tempor posuere erat.",
        images: ["./img/projects/cows/duke.png", "./img/projects/cows/art.png"]
    }, {
        title: "Zoo Animals",
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